const hargaPaket = { self1: 55000, self2: 65000, photobox: 30000 };
const formatRupiah = n => 'Rp' + n.toLocaleString('id-ID');

document.getElementById('year').textContent = new Date().getFullYear();

const paket = document.getElementById('paketSelect');
const harga = document.getElementById('harga');
const waBtn = document.getElementById('waBtn');
const bg = document.getElementById('bgSelect');
const dt = document.getElementById('datetime');

function updateHarga(){
  const h = hargaPaket[paket.value] || 0;
  harga.textContent = formatRupiah(h);
}
updateHarga();
paket.addEventListener('change', updateHarga);

function buildWA(){
  const nomor = '6282120302590';
  const pesan = `Halo Kaizen Studio,%0A%0ASaya ingin booking:%0A- Paket: ${paket.options[paket.selectedIndex].text}%0A- Background: ${bg.value}%0A- Jadwal: ${dt.value || '(pilih belakangan)'}%0A%0AEstimasi harga: ${harga.textContent}.`;
  waBtn.href = `https://wa.me/${nomor}?text=${pesan}`;
}

['change','keyup'].forEach(evt=>{
  [paket,bg,dt].forEach(el=>el.addEventListener(evt, buildWA));
});
buildWA();
