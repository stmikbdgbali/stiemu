<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Carbon\Carbon;
use Spatie\Permission\Models\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::statement('DELETE FROM roles');
        \DB::statement('ALTER TABLE roles AUTO_INCREMENT = 1;');
        \DB::table('roles')->insert([
            [
                'name'=>'superadmin',
                'guard_name'=>'api',
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ],
            [
                'name'=>'akademik',
                'guard_name'=>'api',
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ],
            [
                'name'=>'programstudi',
                'guard_name'=>'api',
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ],
            [
                'name'=>'pmb',
                'guard_name'=>'api',
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ],
            [
                'name'=>'keuangan',
                'guard_name'=>'api',
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ],
            [
                'name'=>'perpustakaan',
                'guard_name'=>'api',
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ],
            [
                'name'=>'lppm',
                'guard_name'=>'api',
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ],
            [
                'name'=>'puslahta',
                'guard_name'=>'api',
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ],
            [
                'name'=>'dosen',
                'guard_name'=>'api',
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ],
            [
                'name'=>'dosenwali',
                'guard_name'=>'api',
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ],
            [
                'name'=>'mahasiswa',
                'guard_name'=>'api',
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ],
            [
                'name'=>'mahasiswabaru',
                'guard_name'=>'api',
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ],
            [
                'name'=>'alumni',
                'guard_name'=>'api',
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ],
            [
                'name'=>'orangtuawali',
                'guard_name'=>'api',
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ],
        ]);

        $role = Role::findByName('mahasiswabaru');
        $records=[
            'DASHBOARD_SHOW',
            'SPMB-GROUP',
            'SPMB-PMB-FORMULIR-PENDAFTARAN_BROWSE',
            'SPMB-PMB-FORMULIR-PENDAFTARAN_SHOW',
            'SPMB-PMB-FORMULIR-PENDAFTARAN_STORE',
            'SPMB-PMB-FORMULIR-PENDAFTARAN_UPDATE',
            'SPMB-PMB-PERSYARATAN_SHOW',
            'SPMB-PMB-PERSYARATAN_STORE',
            'KEUANGAN-KONFIRMASI-PEMBAYARAN_BROWSE',
            'KEUANGAN-KONFIRMASI-PEMBAYARAN_SHOW',
            'KEUANGAN-KONFIRMASI-PEMBAYARAN_STORE',
            'SPMB-PMB-JADWAL-UJIAN_BROWSE',
            'SPMB-PMB-UJIAN-ONLINE_BROWSE',
            'SPMB-PMB-UJIAN-ONLINE_SHOW',
            'SPMB-PMB-UJIAN-ONLINE_STORE',
            'SPMB-PMB-UJIAN-ONLINE_UPDATE',
        ];
        $role->syncPermissions($records);

        $role = Role::findByName('mahasiswa');
        $records=[
            'DASHBOARD_SHOW',

            'AKADEMIK-GROUP',
            'AKADEMIK-DULANG-MHS_BROWSE',
            'AKADEMIK-DULANG-MHS_SHOW',

            'AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_BROWSE',

            'AKADEMIK-PERKULIAHAN-KRS_BROWSE',
            'AKADEMIK-PERKULIAHAN-KRS_DESTROY',
            'AKADEMIK-PERKULIAHAN-KRS_STORE',
            'AKADEMIK-PERKULIAHAN-KRS_SHOW',
            'AKADEMIK-PERKULIAHAN-KRS_UPDATE',

            'KEUANGAN-GROUP',
            'KEUANGAN-RINGKASAN_BROWSE',
            'KEUANGAN-BIAYA-KOMPONEN-PERIODE_BROWSE',

            'KEUANGAN-TRANSAKSI_BROWSE',

            'KEUANGAN-TRANSAKSI-DULANG-MHS-BARU_BROWSE',
            'KEUANGAN-TRANSAKSI-DULANG-MHS-BARU_DESTROY',
            'KEUANGAN-TRANSAKSI-DULANG-MHS-BARU_STORE',
            'KEUANGAN-TRANSAKSI-DULANG-MHS-BARU_SHOW',
            'KEUANGAN-TRANSAKSI-DULANG-MHS-BARU_UPDATE',
            
            'KEUANGAN-TRANSAKSI-REGISTRASIKRS_BROWSE',
            'KEUANGAN-TRANSAKSI-REGISTRASIKRS_DESTROY',
            'KEUANGAN-TRANSAKSI-REGISTRASIKRS_STORE',
            'KEUANGAN-TRANSAKSI-REGISTRASIKRS_SHOW',
            'KEUANGAN-TRANSAKSI-REGISTRASIKRS_UPDATE',
            
            'KEUANGAN-TRANSAKSI-SEMINAR_BROWSE',
            'KEUANGAN-TRANSAKSI-SEMINAR_DESTROY',
            'KEUANGAN-TRANSAKSI-SEMINAR_STORE',
            'KEUANGAN-TRANSAKSI-SEMINAR_SHOW',
            'KEUANGAN-TRANSAKSI-SEMINAR_UPDATE',
            
            'KEUANGAN-TRANSAKSI-SPP_BROWSE',
            'KEUANGAN-TRANSAKSI-SPP_DESTROY',
            'KEUANGAN-TRANSAKSI-SPP_STORE',
            'KEUANGAN-TRANSAKSI-SPP_SHOW',
            'KEUANGAN-TRANSAKSI-SPP_UPDATE',
            
            'KEUANGAN-TRANSAKSI-UJIAN-MUNAQASAH_BROWSE',
            'KEUANGAN-TRANSAKSI-UJIAN-MUNAQASAH_DESTROY',
            'KEUANGAN-TRANSAKSI-UJIAN-MUNAQASAH_STORE',
            'KEUANGAN-TRANSAKSI-UJIAN-MUNAQASAH_SHOW',
            'KEUANGAN-TRANSAKSI-UJIAN-MUNAQASAH_UPDATE',
            
            'KEUANGAN-TRANSAKSI-WISUDA_BROWSE',
            'KEUANGAN-TRANSAKSI-WISUDA_DESTROY',
            'KEUANGAN-TRANSAKSI-WISUDA_STORE',
            'KEUANGAN-TRANSAKSI-WISUDA_SHOW',
            'KEUANGAN-TRANSAKSI-WISUDA_UPDATE',
            
            'KEUANGAN-TRANSAKSI-PKL_BROWSE',
            'KEUANGAN-TRANSAKSI-PKL_DESTROY',
            'KEUANGAN-TRANSAKSI-PKL_STORE',
            'KEUANGAN-TRANSAKSI-PKL_SHOW',
            'KEUANGAN-TRANSAKSI-PKL_UPDATE',
            
            'KEUANGAN-TRANSAKSI-KKN_BROWSE',
            'KEUANGAN-TRANSAKSI-KKN_DESTROY',
            'KEUANGAN-TRANSAKSI-KKN_STORE',
            'KEUANGAN-TRANSAKSI-KKN_SHOW',
            'KEUANGAN-TRANSAKSI-KKN_UPDATE',
        ];
        $role->syncPermissions($records);

        $role = Role::findByName('keuangan');
        $records=[
            'DASHBOARD_SHOW',
            'KEUANGAN-GROUP',
            'KEUANGAN-RINGKASAN_BROWSE',

            'KEUANGAN-KOMPONEN-BIAYA_BROWSE',

            'KEUANGAN-BIAYA-KOMPONEN-PERIODE_BROWSE',
            'KEUANGAN-BIAYA-KOMPONEN-PERIODE_STORE',
            'KEUANGAN-BIAYA-KOMPONEN-PERIODE_SHOW',
            'KEUANGAN-BIAYA-KOMPONEN-PERIODE_STORE',
            'KEUANGAN-BIAYA-KOMPONEN-PERIODE_UPDATE',
            'KEUANGAN-BIAYA-KOMPONEN-PERIODE_DESTROY',

            'KEUANGAN-TRANSAKSI_BROWSE',
            'KEUANGAN-TRANSAKSI_STORE',
            'KEUANGAN-TRANSAKSI_SHOW',
            'KEUANGAN-TRANSAKSI_STORE',
            'KEUANGAN-TRANSAKSI_UPDATE',
            'KEUANGAN-TRANSAKSI_DESTROY',

            'KEUANGAN-KONFIRMASI-PEMBAYARAN_BROWSE',
            'KEUANGAN-KONFIRMASI-PEMBAYARAN_STORE',
            'KEUANGAN-KONFIRMASI-PEMBAYARAN_SHOW',
            'KEUANGAN-KONFIRMASI-PEMBAYARAN_STORE',
            'KEUANGAN-KONFIRMASI-PEMBAYARAN_UPDATE',
            'KEUANGAN-KONFIRMASI-PEMBAYARAN_DESTROY',

            'KEUANGAN-TRANSAKSI-DULANG-MHS-BARU_BROWSE',
            'KEUANGAN-TRANSAKSI-DULANG-MHS-BARU_DESTROY',
            'KEUANGAN-TRANSAKSI-DULANG-MHS-BARU_STORE',
            'KEUANGAN-TRANSAKSI-DULANG-MHS-BARU_SHOW',
            'KEUANGAN-TRANSAKSI-DULANG-MHS-BARU_UPDATE',
            
            'KEUANGAN-TRANSAKSI-REGISTRASIKRS_BROWSE',
            'KEUANGAN-TRANSAKSI-REGISTRASIKRS_DESTROY',
            'KEUANGAN-TRANSAKSI-REGISTRASIKRS_STORE',
            'KEUANGAN-TRANSAKSI-REGISTRASIKRS_SHOW',
            'KEUANGAN-TRANSAKSI-REGISTRASIKRS_UPDATE',
            
            'KEUANGAN-TRANSAKSI-SEMINAR_BROWSE',
            'KEUANGAN-TRANSAKSI-SEMINAR_DESTROY',
            'KEUANGAN-TRANSAKSI-SEMINAR_STORE',
            'KEUANGAN-TRANSAKSI-SEMINAR_SHOW',
            'KEUANGAN-TRANSAKSI-SEMINAR_UPDATE',
            
            'KEUANGAN-TRANSAKSI-SPP_BROWSE',
            'KEUANGAN-TRANSAKSI-SPP_DESTROY',
            'KEUANGAN-TRANSAKSI-SPP_STORE',
            'KEUANGAN-TRANSAKSI-SPP_SHOW',
            'KEUANGAN-TRANSAKSI-SPP_UPDATE',
            
            'KEUANGAN-TRANSAKSI-UJIAN-MUNAQASAH_BROWSE',
            'KEUANGAN-TRANSAKSI-UJIAN-MUNAQASAH_DESTROY',
            'KEUANGAN-TRANSAKSI-UJIAN-MUNAQASAH_STORE',
            'KEUANGAN-TRANSAKSI-UJIAN-MUNAQASAH_SHOW',
            'KEUANGAN-TRANSAKSI-UJIAN-MUNAQASAH_UPDATE',
            
            'KEUANGAN-TRANSAKSI-WISUDA_BROWSE',
            'KEUANGAN-TRANSAKSI-WISUDA_DESTROY',
            'KEUANGAN-TRANSAKSI-WISUDA_STORE',
            'KEUANGAN-TRANSAKSI-WISUDA_SHOW',
            'KEUANGAN-TRANSAKSI-WISUDA_UPDATE',
            
            'KEUANGAN-TRANSAKSI-PKL_BROWSE',
            'KEUANGAN-TRANSAKSI-PKL_DESTROY',
            'KEUANGAN-TRANSAKSI-PKL_STORE',
            'KEUANGAN-TRANSAKSI-PKL_SHOW',
            'KEUANGAN-TRANSAKSI-PKL_UPDATE',
            
            'KEUANGAN-TRANSAKSI-KKN_BROWSE',
            'KEUANGAN-TRANSAKSI-KKN_DESTROY',
            'KEUANGAN-TRANSAKSI-KKN_STORE',
            'KEUANGAN-TRANSAKSI-KKN_SHOW',
            'KEUANGAN-TRANSAKSI-KKN_UPDATE',
            
            'AKADEMIK-GROUP',
            'AKADEMIK-KEMAHASISWAAN-DAFTAR-MAHASISWA_BROWSE',
        ];
        $role->syncPermissions($records);
    }
}
