let bitcoin = document.getElementById("bitcoin");
        let ethereum = document.getElementById("etc");
        let bin = document.getElementById("bin");

        let apiUrl = "https://api.coinlore.net/api/ticker/?id=90,80,2710";

        async function create() {
            let response = await fetch(apiUrl);
            let data = await response.json();
                bitcoin.textContent = "$"+data[0].price_usd;
                ethereum.textContent = "$"+data[1].price_usd;
                bin.textContent = "$"+data[2].price_usd;
        }
        setInterval(() => {
            create()
        }, 1);