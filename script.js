document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle para dispositivos móveis
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Rolagem suave para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth',
                });
            }
        });
    });

    const cryptoData = [
        {
            name: 'Bitcoin',
            symbol: 'BTC',
            price: 'R$ 290.450,00',
            change: '+2.5%',
            isPositive: true,
            imageUrl:
                'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
        },
        {
            name: 'Ethereum',
            symbol: 'ETH',
            price: 'R$ 15.780,00',
            change: '+3.2%',
            isPositive: true,
            imageUrl:
                'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
        },
        {
            name: 'Binance Coin',
            symbol: 'BNB',
            price: 'R$ 1.450,00',
            change: '-0.8%',
            isPositive: false,
            imageUrl:
                'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
        },
        {
            name: 'Cardano',
            symbol: 'ADA',
            price: 'R$ 2,35',
            change: '+1.7%',
            isPositive: true,
            imageUrl:
                'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
        },
        {
            name: 'Solana',
            symbol: 'SOL',
            price: 'R$ 580,00',
            change: '+5.2%',
            isPositive: true,
            imageUrl:
                'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png',
        },
        {
            name: 'XRP',
            symbol: 'XRP',
            price: 'R$ 3,20',
            change: '-1.5%',
            isPositive: false,
            imageUrl:
                'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
        },
        {
            name: 'Polkadot',
            symbol: 'DOT',
            price: 'R$ 120,00',
            change: '+0.9%',
            isPositive: true,
            imageUrl:
                'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png',
        },
        {
            name: 'Dogecoin',
            symbol: 'DOGE',
            price: 'R$ 0,45',
            change: '+12.5%',
            isPositive: true,
            imageUrl:
                'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png',
        },
    ];

    // Preencher o ticker de criptomoedas
    const cryptoTicker = document.getElementById('crypto-ticker');

    if (cryptoTicker) {
        // Duplicar os dados para criar um efeito de rolagem contínua
        const allCryptoData = [...cryptoData, ...cryptoData];

        allCryptoData.forEach((crypto) => {
            const tickerItem = document.createElement('div');
            tickerItem.className = 'ticker-item';

            tickerItem.innerHTML = `
                <img src=${crypto.imageUrl} alt="${crypto.name} logo">
                <span class="name">${crypto.symbol}</span>
                <span class="price">${crypto.price}</span>
                <span class="change ${
                    crypto.isPositive ? 'positive' : 'negative'
                }">${crypto.change}</span>
            `;

            cryptoTicker.appendChild(tickerItem);
        });
    }

    // Preencher a tabela de mercados
    const cryptoTable = document.getElementById('crypto-table');

    if (cryptoTable) {
        const tableBody = cryptoTable.querySelector('tbody');

        // Dados de exemplo para a tabela de mercados
        const marketData = [
            {
                name: 'Bitcoin',
                symbol: 'BTC',
                price: 'R$ 290.450,00',
                change: '+2.5%',
                isPositive: true,
                marketCap: 'R$ 5,6 T',
                volume: 'R$ 320 B',
            },
            {
                name: 'Ethereum',
                symbol: 'ETH',
                price: 'R$ 15.780,00',
                change: '+3.2%',
                isPositive: true,
                marketCap: 'R$ 1,9 T',
                volume: 'R$ 150 B',
            },
            {
                name: 'Binance Coin',
                symbol: 'BNB',
                price: 'R$ 1.450,00',
                change: '-0.8%',
                isPositive: false,
                marketCap: 'R$ 240 B',
                volume: 'R$ 12 B',
            },
            {
                name: 'Cardano',
                symbol: 'ADA',
                price: 'R$ 2,35',
                change: '+1.7%',
                isPositive: true,
                marketCap: 'R$ 80 B',
                volume: 'R$ 5 B',
            },
            {
                name: 'Solana',
                symbol: 'SOL',
                price: 'R$ 580,00',
                change: '+5.2%',
                isPositive: true,
                marketCap: 'R$ 75 B',
                volume: 'R$ 8 B',
                imageUrl: '/imagemCrypto',
            },
        ];

        marketData.forEach((crypto) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>
                    <div class="coin-name">
                        <img src=${crypto.imageUrl} alt="${crypto.name} logo">
                        <div>
                            <strong>${crypto.name}</strong>
                            <div>${crypto.symbol}</div>
                        </div>
                    </div>
                </td>
                <td>${crypto.price}</td>
                <td class="${
                    crypto.isPositive ? 'change-positive' : 'change-negative'
                }">${crypto.change}</td>
                <td>${crypto.marketCap}</td>
                <td>${crypto.volume}</td>
            `;

            tableBody.appendChild(row);
        });
    }

    const testimonialSlider = document.getElementById('testimonials-slider');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');

    if (testimonialSlider && prevButton && nextButton) {
        const testimonials = testimonialSlider.querySelectorAll('.testimonial');
        let currentIndex = 0;

        // Função para mostrar o depoimento atual
        function showTestimonial(index) {
            testimonialSlider.style.transform = `translateX(-${index * 100}%)`;
        }

        // Botão anterior
        prevButton.addEventListener('click', () => {
            currentIndex =
                currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
            showTestimonial(currentIndex);
        });

        // Botão próximo
        nextButton.addEventListener('click', () => {
            currentIndex =
                currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
            showTestimonial(currentIndex);
        });

        // Alternar automaticamente a cada 5 segundos
        setInterval(() => {
            currentIndex =
                currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
            showTestimonial(currentIndex);
        }, 5000);
    }

    // Formulário de contato
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulação de envio de formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Aqui você adicionaria o código para enviar os dados para um servidor
            console.log('Formulário enviado:', {
                name,
                email,
                subject,
                message,
            });

            // Feedback visual
            alert(
                'Mensagem enviada com sucesso! Entraremos em contato em breve.'
            );

            // Limpar formulário
            contactForm.reset();
        });
    }

    // Efeito de rolagem para mostrar/ocultar o cabeçalho
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 80) {
            // Rolagem para baixo
            header.style.transform = 'translateY(-100%)';
        } else {
            // Rolagem para cima
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });
});
