const allImages = [
    'https://www.notion.so/images/page-cover/solid_red.png',
    'https://www.notion.so/images/page-cover/solid_yellow.png',
    'https://www.notion.so/images/page-cover/solid_blue.png',
    'https://www.notion.so/images/page-cover/solid_beige.png',
    'https://www.notion.so/images/page-cover/gradients_8.png',
    'https://www.notion.so/images/page-cover/gradients_4.png',
    'https://www.notion.so/images/page-cover/gradients_2.png',
    'https://www.notion.so/images/page-cover/gradients_11.jpg',
    'https://www.notion.so/images/page-cover/gradients_10.jpg',
    'https://www.notion.so/images/page-cover/gradients_5.png',
    'https://www.notion.so/images/page-cover/gradients_3.png',
    'https://www.notion.so/images/page-cover/nasa_the_blue_marble.jpg',
    'https://www.notion.so/images/page-cover/nasa_transonic_tunnel.jpg',
    'https://www.notion.so/images/page-cover/nasa_multi-axis_gimble_rig.jpg',
    'https://www.notion.so/images/page-cover/nasa_eva_during_skylab_3.jpg',
    'https://www.notion.so/images/page-cover/nasa_eagle_in_lunar_orbit.jpg',
    'https://www.notion.so/images/page-cover/nasa_buzz_aldrin_on_the_moon.jpg',
    'https://www.notion.so/images/page-cover/nasa_ibm_type_704.jpg',
    'https://www.notion.so/images/page-cover/nasa_wrights_first_flight.jpg',
    'https://www.notion.so/images/page-cover/nasa_great_sandy_desert_australia.jpg',
    'https://www.notion.so/images/page-cover/nasa_space_shuttle_columbia.jpg',
    'https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk.jpg',
    'https://www.notion.so/images/page-cover/nasa_space_shuttle_challenger.jpg',
    'https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk_2.jpg',
    'https://www.notion.so/images/page-cover/nasa_space_shuttle_columbia_and_sunrise.jpg',
    'https://www.notion.so/images/page-cover/nasa_tim_peake_spacewalk.jpg',
    'https://www.notion.so/images/page-cover/nasa_bruce_mccandless_spacewalk.jpg',
    'https://www.notion.so/images/page-cover/nasa_new_york_city_grid.jpg',
    'https://www.notion.so/images/page-cover/nasa_fingerprints_of_water_on_the_sand.jpg',
    'https://www.notion.so/images/page-cover/nasa_carina_nebula.jpg',
    'https://www.notion.so/images/page-cover/nasa_orion_nebula.jpg',
    'https://www.notion.so/images/page-cover/nasa_reduced_gravity_walking_simulator.jpg',
    'https://www.notion.so/images/page-cover/nasa_earth_grid.jpg',
    'https://www.notion.so/images/page-cover/met_william_morris_1877_willow.jpg',
    'https://www.notion.so/images/page-cover/met_william_morris_1875.jpg',
    'https://www.notion.so/images/page-cover/met_william_morris_1878.jpg',
    'https://www.notion.so/images/page-cover/met_silk_kashan_carpet.jpg',
    'https://www.notion.so/images/page-cover/rijksmuseum_vermeer_the_milkmaid.jpg',
    'https://www.notion.so/images/page-cover/rijksmuseum_jansz_1649.jpg',
    'https://www.notion.so/images/page-cover/rijksmuseum_rembrandt_1642.jpg',
    'https://www.notion.so/images/page-cover/rijksmuseum_jansz_1636.jpg',
    'https://www.notion.so/images/page-cover/rijksmuseum_jansz_1641.jpg',
    'https://www.notion.so/images/page-cover/rijksmuseum_jan_lievens_1627.jpg',
    'https://www.notion.so/images/page-cover/rijksmuseum_jansz_1637.jpg',
    'https://www.notion.so/images/page-cover/rijksmuseum_mignons_1660.jpg',
    'https://www.notion.so/images/page-cover/rijksmuseum_avercamp_1620.jpg',
    'https://www.notion.so/images/page-cover/rijksmuseum_avercamp_1608.jpg',
    'https://www.notion.so/images/page-cover/rijksmuseum_claesz_1628.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_1.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_2.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_3.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_4.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_5.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_6.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_7.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_8.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_9.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_10.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_11.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_13.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_14.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_15.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_16.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_sekka_1.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_sekka_2.jpg',
    'https://www.notion.so/images/page-cover/woodcuts_sekka_3.jpg',
    'https://www.notion.so/images/page-cover/met_vincent_van_gogh_ginoux.jpg',
    'https://www.notion.so/images/page-cover/met_winslow_homer_maine_coast.jpg',
    'https://www.notion.so/images/page-cover/met_frederic_edwin_church_1871.jpg',
    'https://www.notion.so/images/page-cover/met_joseph_hidley_1870.jpg',
    'https://www.notion.so/images/page-cover/met_jules_tavernier_1878.jpg',
    'https://www.notion.so/images/page-cover/met_henry_lerolle_1885.jpg',
    'https://www.notion.so/images/page-cover/met_georges_seurat_1884.jpg',
    'https://www.notion.so/images/page-cover/met_john_singer_sargent_morocco.jpg',
    'https://www.notion.so/images/page-cover/met_paul_signac.jpg',
    'https://www.notion.so/images/page-cover/met_vincent_van_gogh_oleanders.jpg',
    'https://www.notion.so/images/page-cover/met_emanuel_leutze.jpg',
    'https://www.notion.so/images/page-cover/met_fitz_henry_lane.jpg',
    'https://www.notion.so/images/page-cover/met_vincent_van_gogh_cradle.jpg',
    'https://www.notion.so/images/page-cover/met_camille_pissarro_1896.jpg',
    'https://www.notion.so/images/page-cover/met_gerome_1890.jpg',
    'https://www.notion.so/images/page-cover/met_arnold_bocklin_1880.jpg',
    'https://www.notion.so/images/page-cover/met_henri_tl_1892.jpg',
    'https://www.notion.so/images/page-cover/met_horace_pippin.jpg',
    'https://www.notion.so/images/page-cover/met_jean_beraud.jpg',
    'https://www.notion.so/images/page-cover/met_cezanne_1890.jpg',
    'https://www.notion.so/images/page-cover/met_edgar_degas_1874.jpg',
    'https://www.notion.so/images/page-cover/met_henri_rousseau_1907.jpg',
    'https://www.notion.so/images/page-cover/met_vincent_van_gogh_irises.jpg',
    'https://www.notion.so/images/page-cover/met_terracotta_funerary_plaque.jpg',
    'https://www.notion.so/images/page-cover/met_william_turner_1835.jpg',
    'https://www.notion.so/images/page-cover/met_the_unicorn_in_captivity.jpg',
    'https://www.notion.so/images/page-cover/met_goya_1789.jpg',
    'https://www.notion.so/images/page-cover/met_bruegel_1565.jpg',
    'https://www.notion.so/images/page-cover/met_canaletto_1720.jpg',
    'https://www.notion.so/images/page-cover/met_klimt_1912.jpg']

export default function getImageByName (name) {
    String.prototype.hashCode = function () {
        var hash = 0, i, chr
        if (this.length === 0) return hash
        for (i = 0; i < this.length; i++) {
            chr = this.charCodeAt(i)
            hash = ((hash << 5) - hash) + chr
            hash |= 0 // Convert to 32bit integer
        }
        return hash
    }
    return allImages[Math.abs(name.hashCode()) % (allImages.length - 1)]
}
