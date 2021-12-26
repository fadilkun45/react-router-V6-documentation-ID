import React from 'react'

const Home = () => {
    return (
      <div className="container flex col text-center m-10 p-10  bg-blue text-white">
          <h2>React Router DOM V6 Documentation</h2>
          <p className='m-1'>Di dokumentasi ini sudah ada</p>
          <p className='m-1' >- navbar saat link active </p>
          <p className='m-1' >- Page yang tidak ada navbar</p>
          <p className='m-1' >- Protected Page (simple auth)</p>
          <p className='m-1' >- Default Page saat awal masuk</p>

            <h3>sistem nested Page di react router V6</h3>
            <p>jadi di react router v6 ada fitur nested dimana fitur ini sangat berguna saat ingin membuat 2 page atau lebih menjadi satu layout contoh saja page ini dan page dashboard dimana dalam satu layout yang ada navbar nya. dan diluar ada page login yang tidak memiliki navbar.</p>
            <p className='m-5'>
                di dalam nested router ada yang namanya outlet guna nya untuk menetapkan dimana posisi element tersebut akan dirender. contoh saja bisa di lihat di source code web ini lihat di App.jsx di function Mainlayout, function mainLayout adalah function awal untuk menempelkan element navbar dan element utama seperti page ini dan dashboard
            </p>

            <h3>cara react router dom V6 menampilkan link page yang active</h3>
            <p>
                sebenarnya cara nya sama saja dengan react router v5 namun bedanya disini bukan Link untuk elemen redirect nya tetapi menggunakan NavLink. bagi yang belom tau cara nya adalah dengan menambahkan activeClassName di dalam navLink (ini cara react router v6). untuk lebih jelas bisa lihat di dalam component navbar.jsx dan contoh bisa lihat navbar website ini.
            </p>

            <h3>Page yang tidak Memiliki Navbar</h3>
            <p>untuk yang hal ini sangat simple kalau kalian membaca yang tentang nested (paragaf pertama dokumentasi ini ) jadi semua Page yang ada navbar nya maka akan masuk kedalam function main layout dan sisa nya akan diluar function tersebut yang berati dia tidak tersangkut dengan layout yang ada navbar nya</p>

            <h3>Protected Page/Router</h3>
            <p className='m-1'>
                Protected page atau page yang hanya bisa dibuka saat kalian sudah terauthentikasi cara nya adalah diawal dengan mengecek apakah user yang masuk ter authentikasi atau tidak.
            </p>
            <p className='m-1'>
            contoh nya bisa kalian lihat di dashboard saat kalian baru masuk maka kalian gk bisa ngapa ngapain kecuali kalian login dlu di page Login, dan saat sudah terauthentikasi saat kalian masuk ke page login maka otomatis akan ter redirect otomatis ke page dashboard.untuk contoh kalian bisa liat di page Main.jsx
            </p>
            <p className='m-1'>
             nah untuk sistem auth sendiri disini tidak menggunakan jwt,rtk atau redux disini hanya menggunakan hook biasa untuk state nya.
            </p>
            <h3>Page Detail</h3>
            <p>untuk Page detail jadi page ini mengambil param dari url dimana selanjut nya page detail ini akan mengelola sesuai kebutuhan. contoh sebuah web blog maka pada saat masuk ke detail blog id/param dari url yang dikirimkan akan di olah untuk merequest content ke server yang selanjut nya data dari server diolah oleh detail blog</p>
            
            <h3 className='m-10'>kalau bingung dengan dokumentasi buatan saya Bisa chat saya di messenger <a href="#">Faldi Rmdhn</a> terimakasih :)</h3>
      </div>
    )
}

export default Home
