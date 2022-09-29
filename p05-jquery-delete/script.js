$(document).ready(function(){
    $('.data').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('__');
        let id_baris = rid[1];
        let nama_bestie = $('#nama_bestie__'+id_baris).text();

        if(isi=='Hapus'){
            let konfirmasi = confirm(`Apakah anda yakin ingin menghapus data atas nama ${nama_bestie}??`);
            if(!konfirmasi) return;

            $('#baris__'+id_baris).fadeOut();
        }else{
            alert("Anda mengklik kolom yang berisi : " +$(this).html() + "!");
        }
    })
})