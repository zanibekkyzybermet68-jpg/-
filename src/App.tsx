import React, { useState, useEffect, useRef } from 'react';
import { STITCH_SCREENS, StitchScreenKey } from './data/stitchScreens';
import { IMAGES } from './data/frunzeData';

interface PreorderItem {
  title: string;
  price: number;
  qty: number;
}

declare global {
  interface Window {
    __stitchToast: (msg: string) => void;
    handleReservationSubmit: () => void;
    quickOrderDish: (name: string, price: string | number) => void;
    saveLocationBookmark: () => void;
    shareRestaurantLink: () => void;
    filterCategory: (cat: string) => void;
    addToPreorder: (title: string, price: number) => void;
    clearPreorder: () => void;
    removeCartItem: (index: number) => void;
    handlePreorderSubmit: (e: Event) => void;
    updateGuestCount: (val: string | number) => void;
    calculateEstimate: () => void;
    showConfirmation: () => void;
  }
}

export default function App() {
  const [activeScreen, setActiveScreen] = useState<StitchScreenKey>('glavnaya-obzor');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const preorderCartRef = useRef<PreorderItem[]>([]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3600);
  };

  useEffect(() => {
    window.__stitchToast = (msg: string) => {
      showToast(msg);
    };

    // Screen 1: Главная / Обзор handlers
    window.handleReservationSubmit = () => {
      const alertEl = document.getElementById('reservation-alert');
      const btnText = document.getElementById('res-btn-text');
      if (btnText) btnText.textContent = 'Обработка...';
      setTimeout(() => {
        if (btnText) btnText.textContent = 'Подтвердить';
        if (alertEl) {
          alertEl.classList.remove('hidden');
          alertEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        showToast('Ваша заявка на бронирование стола успешно зарегистрирована.');
      }, 450);
    };

    window.quickOrderDish = (name: string, price: string | number) => {
      const numericPrice =
        typeof price === 'number'
          ? price
          : parseInt(String(price).replace(/[^\d]/g, ''), 10) || 1200;
      const existing = preorderCartRef.current.find((i) => i.title === name);
      if (existing) {
        existing.qty += 1;
      } else {
        preorderCartRef.current.push({ title: name, price: numericPrice, qty: 1 });
      }
      showToast(
        `Блюдо «${name}» (${price} ⃀) добавлено в корзину бронирования стола / предзаказа kaynar.kg.`
      );
    };

    window.saveLocationBookmark = () => {
      const btn = document.getElementById('save-loc-text');
      if (btn) {
        btn.textContent = 'Сохранено!';
        setTimeout(() => {
          btn.textContent = 'Сохранить';
        }, 2500);
      }
      showToast('Ресторан «Фрунзе» сохранен в ваши закладки.');
    };

    window.shareRestaurantLink = () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href).catch(() => {});
      }
      showToast('Ссылка на Ресторан «Фрунзе» скопирована в буфер обмена.');
    };

    // Screen 2: Меню и Шеф-повар handlers
    const updateCartUI = () => {
      const listEl = document.getElementById('preorderItemsList');
      const badgeEl = document.getElementById('cartCountBadge');
      const countListEl = document.getElementById('cartCountList');
      const totalEl = document.getElementById('cartTotalSum');

      const cart = preorderCartRef.current;
      const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
      const totalSum = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

      if (badgeEl) badgeEl.textContent = String(totalQty);
      if (countListEl) countListEl.textContent = String(totalQty);
      if (totalEl) totalEl.textContent = totalSum.toLocaleString('ru-RU') + ' ⃀';

      if (!listEl) return;
      if (cart.length === 0) {
        listEl.innerHTML =
          '<div class="text-stone-light font-body-sm text-body-sm py-2 italic text-center" id="emptyCartNotice">Вы пока не добавили блюда. Нажмите кнопку «Добавить в предзаказ» на карточке любого блюда.</div>';
      } else {
        listEl.innerHTML = '';
        cart.forEach((item, index) => {
          const row = document.createElement('div');
          row.className =
            'flex items-center justify-between py-1.5 px-2 bg-surface-container-high rounded text-stone-light font-body-sm text-body-sm';
          row.innerHTML = `
            <div class="flex items-center gap-2 truncate">
              <span class="text-gold-leaf font-bold">${item.qty}×</span>
              <span class="text-cream-alabaster truncate">${item.title}</span>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-gold-leaf">${(item.price * item.qty).toLocaleString('ru-RU')} ⃀</span>
              <button onclick="removeCartItem(${index})" class="material-symbols-outlined text-[16px] text-stone-warm hover:text-error transition-colors cursor-pointer">close</button>
            </div>
          `;
          listEl.appendChild(row);
        });
      }
    };

    window.filterCategory = (cat: string) => {
      const buttons = document.querySelectorAll('#categoryFilterContainer .cat-btn');
      buttons.forEach((btn) => {
        if (btn.getAttribute('data-cat') === cat) {
          btn.classList.add('bg-emerald-mid', 'text-gold-leaf');
          btn.classList.remove('text-stone-light', 'hover:bg-surface-container');
        } else {
          btn.classList.remove('bg-emerald-mid', 'text-gold-leaf');
          btn.classList.add('text-stone-light', 'hover:bg-surface-container');
        }
      });

      const items = document.querySelectorAll<HTMLElement>('#dishesGrid .dish-item');
      items.forEach((item) => {
        const itemCat = item.getAttribute('data-category');
        if (cat === 'all' || itemCat === cat) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });

      const titles: Record<string, string> = {
        all: 'Все блюда шеф-повара',
        national: 'Национальные деликатесы Кыргызстана',
        steaks: 'Стейки на арчовых углях и мясо',
        'soups-salads': 'Супы и авторские салаты',
        'desserts-bar': 'Фирменные десерты и барная карта',
      };
      const titleEl = document.getElementById('categoryTitleDisplay');
      if (titleEl && titles[cat]) {
        titleEl.textContent = titles[cat];
      }
    };

    window.addToPreorder = (title: string, price: number) => {
      const existing = preorderCartRef.current.find((i) => i.title === title);
      if (existing) {
        existing.qty += 1;
      } else {
        preorderCartRef.current.push({ title, price, qty: 1 });
      }
      updateCartUI();
      const badge = document.getElementById('cartCountBadge');
      if (badge) {
        badge.classList.add('scale-125');
        setTimeout(() => badge.classList.remove('scale-125'), 200);
      }
      showToast(`Добавлено в предзаказ: ${title} (${price.toLocaleString('ru-RU')} ⃀)`);
    };

    window.clearPreorder = () => {
      preorderCartRef.current = [];
      updateCartUI();
      showToast('Список предзаказа очищен.');
    };

    window.removeCartItem = (index: number) => {
      if (preorderCartRef.current[index]) {
        preorderCartRef.current.splice(index, 1);
        updateCartUI();
      }
    };

    window.handlePreorderSubmit = (e: Event) => {
      if (e && e.preventDefault) e.preventDefault();
      const msg = document.getElementById('submitSuccessMsg');
      if (msg) {
        msg.classList.remove('hidden');
        setTimeout(() => {
          msg.classList.add('hidden');
        }, 7000);
      }
      showToast('Предзаказ и заявка на бронирование переданы шеф-консьержу.');
    };

    // Screen 3: Галерея и Залы handlers
    window.calculateEstimate = () => {
      const guestRange = document.getElementById('guestRange') as HTMLInputElement | null;
      if (!guestRange) return;
      const guests = parseInt(guestRange.value, 10) || 40;
      const menuRadio = document.querySelector<HTMLInputElement>(
        'input[name="menuTier"]:checked'
      );
      const perGuestPrice = menuRadio ? parseInt(menuRadio.value, 10) : 3800;
      const total = guests * perGuestPrice;
      const formatted = new Intl.NumberFormat('ru-RU').format(total) + ' сом';
      const totalDisplay = document.getElementById('totalEstimateDisplay');
      if (totalDisplay) {
        totalDisplay.textContent = formatted;
      }
    };

    window.updateGuestCount = (val: string | number) => {
      const guestDisplay = document.getElementById('guestCountDisplay');
      if (guestDisplay) {
        guestDisplay.textContent = `${val} гостей`;
      }
      window.calculateEstimate();
    };

    window.showConfirmation = () => {
      const notice = document.getElementById('bookingSuccessNotice');
      if (notice) {
        notice.classList.remove('hidden');
        notice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      showToast('Запрос на организацию банкета передан банкетной службе «Фрунзе».');
    };
  }, []);

  // Re-bind DOM listeners whenever activeScreen changes
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // 1. Virtual Tour Modal on Screen 1
    const tourOpenBtn = root.querySelector('#open-virtual-tour');
    const tourCloseBtn = root.querySelector('#close-virtual-tour');
    const tourModal = root.querySelector('#virtual-tour-modal');

    const handleOpenTour = (e: Event) => {
      e.preventDefault();
      if (tourModal) {
        tourModal.classList.remove('hidden');
        tourModal.classList.add('flex');
      }
    };
    const handleCloseTour = () => {
      if (tourModal) {
        tourModal.classList.add('hidden');
        tourModal.classList.remove('flex');
      }
    };

    tourOpenBtn?.addEventListener('click', handleOpenTour);
    tourCloseBtn?.addEventListener('click', handleCloseTour);

    // 2. Gallery Filter Buttons on Screen 3
    const filterButtons = root.querySelectorAll('.gallery-filter-btn');
    const galleryCards = root.querySelectorAll<HTMLElement>('.gallery-card');
    const handleGalleryFilterClick = (btn: Element) => () => {
      filterButtons.forEach((b) => {
        b.classList.remove('bg-secondary', 'text-on-secondary', 'shadow-md');
        b.classList.add('text-stone-light');
      });
      btn.classList.add('bg-secondary', 'text-on-secondary', 'shadow-md');
      btn.classList.remove('text-stone-light');

      const filter = btn.getAttribute('data-filter');
      galleryCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    };

    const cleanupGalleryListeners: (() => void)[] = [];
    filterButtons.forEach((btn) => {
      const listener = handleGalleryFilterClick(btn);
      btn.addEventListener('click', listener);
      cleanupGalleryListeners.push(() => btn.removeEventListener('click', listener));
    });

    // 3. Sync Preorder Cart on Screen 2 or Calculate Estimate on Screen 3
    if (activeScreen === 'menyu-i-shef-povar') {
      // Trigger cart UI sync if items were added from Screen 1
      const badgeEl = root.querySelector('#cartCountBadge');
      if (badgeEl && preorderCartRef.current.length > 0) {
        const existing = [...preorderCartRef.current];
        preorderCartRef.current = [];
        existing.forEach((entry) => {
          for (let i = 0; i < entry.qty; i++) {
            window.addToPreorder(entry.title, entry.price);
          }
        });
      }
    }
    if (activeScreen === 'galereya-i-zaly') {
      window.calculateEstimate();
    }

    // 4. Image resilience fallback to local generated assets
    const imgs = root.querySelectorAll<HTMLImageElement>('img');
    const fallbackPool = [
      IMAGES.heroInterior,
      IMAGES.terraceCocktails,
      IMAGES.appleDessert,
      IMAGES.ribeyeSteak,
      IMAGES.beshbarmakShorpo,
    ];
    imgs.forEach((img, idx) => {
      img.setAttribute('referrerpolicy', 'no-referrer');
      img.onerror = () => {
        const fallback = fallbackPool[idx % fallbackPool.length];
        if (img.src !== window.location.origin + fallback) {
          img.src = fallback;
        }
      };
    });

    return () => {
      tourOpenBtn?.removeEventListener('click', handleOpenTour);
      tourCloseBtn?.removeEventListener('click', handleCloseTour);
      cleanupGalleryListeners.forEach((fn) => fn());
    };
  }, [activeScreen]);

  // Delegated click handler for Stitch navigation links (`data-path="..."`)
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const navLink = target.closest<HTMLElement>('[data-path]');
    if (navLink) {
      const path = navLink.getAttribute('data-path');
      if (
        path === 'glavnaya-obzor' ||
        path === 'menyu-i-shef-povar' ||
        path === 'galereya-i-zaly' ||
        path === 'otzyvy-gostej'
      ) {
        e.preventDefault();
        setActiveScreen(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (path === 'kontakty-i-bronirovanie') {
        e.preventDefault();
        setActiveScreen('glavnaya-obzor');
        setTimeout(() => {
          const bookingEl = document.getElementById('booking-widget');
          if (bookingEl) {
            bookingEl.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
        return;
      }
    }
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface relative">
      {/* Heritage Gastronomy Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[100] bg-surface-charcoal/95 backdrop-blur-xl border border-gold-leaf/40 text-cream-alabaster px-5 py-3.5 rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.85)] flex items-center gap-3 max-w-md">
          <span className="material-symbols-outlined text-gold-leaf text-[20px]">verified</span>
          <span className="font-body-sm text-body-sm">{toastMessage}</span>
        </div>
      )}

      {/* Active Stitch Screen Container */}
      <div
        ref={containerRef}
        onClick={handleContainerClick}
        dangerouslySetInnerHTML={{ __html: STITCH_SCREENS[activeScreen] }}
      />
    </div>
  );
}
