import DataImage from "./data";
import {listTools, listProyek} from "./data"

function App() {

  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1"> 
      <div className="animate__animated animate__fadeInUp animate__delay-2s">
        
        <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Endra janitra</h1>
        <p className="text-base/loose mb-6 opacity-50">Saya mempunyai ketertarikan dalam bidang Programming dan Designer, 
        terutama pada pembuatan Website dan Desain seperti Poster, Pamflet serta Banner, ketertarikan pada bidang ini sudah berlangsung lebih dari 4 Tahun untuk semua Bidang.
          </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="#" className="bg-sky-600 p-4 rounded-2xl hover:bg-sky-500">Download CV <i className="ri-download-line ri-lg"></i></a>
          <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="hero image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s" loading="lazy" />
    </div>

    {/* tentang */}
    <div className="tentang mt-32 py-10" id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
        <p className="text-base/loose mb-10">Hi, perkenalkan saya Diky Prayoga, seorang Full Stack Web Developer dan Designer untuk UI/UX Design maupun Product Digital, Saya percaya bahwa desain dan fungsionalitas harus berjalan beriringan, 
          sehingga setiap proyek yang saya kembangkan tidak hanya terlihat menarik tetapi juga memberikan pengalaman pengguna yang optimal.</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">45<span className="text-sky-600">+</span></h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">4<span className="text-sky-600">+</span></h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
      </div>
      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Tools yang di pakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan website</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map(tool => (
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
            <img src={tool.gambar} alt="tools image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
          ))}

          
        </div>
      </div>
    </div>
    {/* tentang */}

    {/* Proyek */}
    <div className="proyek mt-32 py-10" id="proyek">
      <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Proyek</h1>
      <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa proyek yang telah saya buat</p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {listProyek.map(proyek => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
              <img src={proyek.gambar} alt="Proyek image" loading="lazy"/>
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose md-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a className="bg-sky-600 p-3 rounded-lg block border border-zinc-600 hover:bg-sky-500" href="#">Lihat Proyek</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    {/* Kontak */}
    <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
      <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
      <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Mari terhubung dengan saya</p>
      <form action="https://formsubmit.co/akunprib070208@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Nama Lengkap</label>
            <input type="text" name="nama" placeholder="Masukan Nama" className="border border-zinc-500 p-2 rounded-md" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input type="email" name="email" placeholder="Masukan Email" className="border border-zinc-500 p-2 rounded-md" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pesan" className="font-semibold">Pesan</label>
            <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan" className="border border-zinc-500 p-2 rounded-md" required ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-sky-600 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-sky-500" >Kirim Pesan</button>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default App
