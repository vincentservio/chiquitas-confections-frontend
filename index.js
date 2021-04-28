function navLinks() {
  document.getElementById("Appt").innerText += "Order";
  document.getElementById("Home").innerText += "Home";
  document.getElementById("About").innerText += "About";
  document.getElementById("Contact").innerText += "Contact";
  document.getElementById("Appt").addEventListener("click", loadform);
  document.getElementById("Home").addEventListener("click", loadHome);
  document.getElementById("Contact").addEventListener("click", loadContact);
  // document.getElementById("About").addEventListener("click", loadAbout);
}
const appt = () => {
  document.getElementById("navv").innerHTML += `
      <i
      class="fas fa-calendar-alt"
      onclick="loadform()"
      style="font-size: 24px"
    ></i>`;
};

const loadHeader = () => {
  document.getElementById("header").innerHTML += `
    
  <img id="header" src="https://previews.dropbox.com/p/thumb/ABH2aycsomLi67n9ZKPU8doRY6cFaogKaKS3-VMaYVULoUl3variWDqKCaVg3GyPFKwMvW5nkBOapMFw_zXKJEvI2IOpxow928MUcunBB5NVbJ70IstWDkMrUEXLv-9LjctTv-y4Mr-iBlzsRkjVG4giWfy1_UN7nX5oSdwdF24NAV8HJP1fRcWfRBC3iV7zfRjrtjXl2o8L1JALuywov8I8qifYX4g4JrrvB5iTM_QLkbHsaLBjz8tAuUwkev9JN95WCNv_m1llddsKiepvZoayOXaQLSnEfDa3MlpueLS9Fa-y3yDPdyZ5tTpneoZR5VxE5cuSTGIZeAYT7n9303onDCJuZKvVeJKb8VhP6g2GOQ/p.png?fv_content=true&size_mode=5" alt=""/>

    `;
};
function loadHome() {
  clearClicks();
  navLinks();

  document.getElementById("main").innerHTML += `
      <span class="contianer">
    <img id="pic"   src="https://previews.dropbox.com/p/thumb/ABFhVPxtKhGsZcsGrNAgRbeoT9_66st9mB8mnHGDPJG5lyprBe8jctdTMzlxLd3BgcZvjdlt7_DTu9BY7zs_LcX3Fri6ZdygS4FbNQ2pPmSxAYd_D8f4gZM3VcT7NY0Kc4vAKIcixCKK5gLAYDPUWHwBHIEdlJydLtOxzsHQj2sUhOvAi8qgpITHdqiMwsQwypD6z37dJcwGe08BXe1NKrAHvkbd-ODoh6RWlqkFpGC9VZ4b8l7nXXfl6ARv3eSc8KcV7FFrWaCzQ7VdYeKOgoVtYuo0Fim0XWutrY05vevyT-f4uDdpIhUfOA7eML9hvy5DWtIAHe4Ne0Je-EapiKewuruWmgPnpMO9y2eO9fhujmtusx3hRrolBQQEWLblkNIQi1Pi7bObjPYEDglaP25ARzboFOiSTf-ABB90O7N6hxO3j1oOo1fSOblKCUyLNNs/p.png?fv_content=true&size_mode=5">
    <img id="pic"  src="https://previews.dropbox.com/p/thumb/ABHUTlsT48jwtfI_914JsIh7rFjLmmKVR9VsN4nhAudvvbVjyzm2Df0F-pb9Twzptr3x6LZhRsBZRP_CKWbGOCsD2MJrdi2v6zXGCp6AYwb27f-igdZSkATyHcRyqQgl_87t-TCfNXkGVCunx3YF28hUSvYBXKlaAtxvHuTL4bcMPKmYhFQK6V_aN44Gvyafb8m_q8Y3_2t4BZ8C4HjEa8o3kBtEmIqXRJqHtUu318gGj7xxUCUbUCpuk4jm8Unt4kGz9jrp91P8sEtq9j0Vnnodjm-BepM5VeHuwgRqdwnCu99JXFKlJLPig9YTYBeDJf9nrNk2hxBkEZlDZCAfe1NuQVq_V7duv8-xAID-zOMeog/p.png?fv_content=true&size_mode=5">
    <img id="pic"  src="https://previews.dropbox.com/p/thumb/ABGmMofMg_WgwJfN1JzsBpNj9viCqy6KpfzGkeZLxHgCJvdf0Z4k8JcD7gONWzFHxV5KgP21NTczs-U2cOEVvjuWhapAHpwbNhTy6ubYRsHra7eSMUhAefUUA5rXkdo_nNi6vU9NX55XnylG-nscohQyOeJjEcrPkDD_Xau2nm5h8fTgQws3l5RZtrJixfch-pKfSQNAici5YjYsPGGM7yCbANEbJ_0PKeJhEhZsVnbql2SNgvn6g2q2JsjNTKIf7Tq9MUyShszQ0TPKPVYvE5Xmk4aNkiYiyuhSahV_Qnjr455_l-J1Pw8Td9g0EWMPd7wp9080n_zaWHyW1y3ewBBK-FUN3VDTn-IP49NDSmlIdw/p.jpeg?fv_content=true&size_mode=5">
   
    <img id="pic"  src="https://previews.dropbox.com/p/thumb/ABGmsVYXCWHaZHcviuv02Zfh0nZ_0DLXPQuL6S3vZQe2IgUlgGjTZWDbo-sD4UDUMvZ434GI9hZoiHkIHfmzQu8kVfmJNuz58mTD4lUFPa0GumokCjd8rVwhZXi8Pbd41GQABqcKaJatgjerFbbCY6EYffwbOT19lxzsmqK80HUJSeYm1AyQP8t4nvCniAyBz5ijzkjKyAXLjI4i6ooC65Bf4znkq0kOX4FCKZOSlD7d2WmBTS2m4HfmNWLhB8Oasimo1497Tx2md9oj1Nc3R_nBRKZzmS4TtQ_BP_6cS7Ew50PHedgeGkQ6y0ZI93gFjLUzuURhWOuNcEQMXCAvad-foBRY_l7BrwLTH7InMruvGg/p.jpeg?fv_content=true&size_mode=5">
    <img id="pic"  src="https://previews.dropbox.com/p/thumb/ABEnF3H5xaHEC0QrUBwSJuhQuxQBqWTzJhrJoNMDV0d44E4CaLUP12RWoHcFtFhJaoiIl6aUw_jT5C7xgds4xmLAREHLFnfqOnlbdy4c10qOA6zoRmLFcqxaW3jtFJ326uy90pvYUbcqHeHvGlZKd4hePET21_c0bo_Zuav-nkCTHK3mWtAPQ4tN7ojx1DnYe6xFD8AqkOjT78VphlUvEiyfU7etu043ZH1Uy0Meus_fwfprXsmfQHIuowxx1zmxUv26x7Z8ke4OrAiDMpZTBpJZzGCerZ_ZWUdwSRGChXWuUXW4Gsh1g8fM8UsvX5lu-5_dhw_BtI7K4Jj46Z-ZvqkBZrSVeBGDrMawG3loZN2lDw/p.jpeg?fv_content=true&size_mode=5">
            <img id="pic1" src="https://previews.dropbox.com/p/thumb/ABFG_4eGKtjo2itbtwcc5LMo8Dk7u0Z-XxmC0O5I_sF8jc6FZtun1lOW7iN7gKKKFAXoLpd4MrpsGxO0t_RmDJq3TWn0OFIH0eY0ByB32DLGUHtxJFyz8F4PZlaSP435BJkpzeQyniZsDLEZ34_1M07N09JGj4jBv4uU68R56JSaGnQO_G2cG_Kq0ZDZ6DoapLLU38JXdi6eGRBICHtM3OFvdjjhfqlA5aKgefjYcIs6XE0zakYgilsB78G7nm9DKeXCNCrudml8JmaCt7lR8REJqNCGm4hnIt8FLCmwvYYDTqJKNwn9nhXPfMH3n243ww5MU2HObGs9zeP_c34vqbvVdZSc-pYpCDl0TRrAEeMctA/p.png?fv_content=true&size_mode=5">

    
    <img id="pic" src="https://previews.dropbox.com/p/thumb/ABEzrlV0akIoBWMvRhBsUnEDG19thbnYGl-2bGuf8UL2RxxF5ing2j_C4gx5vWWeASPB2AKbAxjOdPas27nGLzuvgpmZItLYuSfiCOzFpPXJ5VksWsthTi5hjK1byo1bJAQq4OZ4fJv1L32_Yx1Fk4TN-CyEsymybTDI4d2RHyPyENlKERFxhkRCpPgITPcNH_YYyEosUHTaUkL3Ns0EP3plzsx07kbLSuUtru3Q_YfNDzNAosEWcaF6MCx-jxeGv_1aYxpv0SRmpMoANT1jGpk_bQ4UobymlcEOultdbaVfxmvnQV5M6-fwtS-NI8R7sgVu0CTbTuZuWmDkAvejCrux48xh8tlQJhO0FtN87_1gOg/p.jpeg?fv_content=true&size_mode=5">
    <img id="pic" src="https://previews.dropbox.com/p/thumb/ABF4PWqXDxlO4ssUp5mAxypl9n-uCGW7BDe-yO6BDWUIwSFA0mfFQgGQ-n0RY5ds77_wjZRC8BHydXsJA6M-DuMqam7HrGX47ILUwO3J6ntkFYehLhNUE0BQ1YDim5g4718B2gACJDHAJmVkm7MV40GvUkwJPki0HQ8gW1cCk4TLEyYZSfrtc_kmsw-DSD1MvBku0yb2Qa9s0sxuYhGf263tDLIJmij8B5AjQlMmjregY3Gd6Tnfjtk2jrgGvCqIrnTw-C9T7Qj2tHlnpdl7pL93pDPQJ-IP99O1KMzW5eRwNOu0Qxf5iZTFxHmC5tcRHNshuwfBiLkfSyIKJSVTmmQbxlRUN9GaA7EdWOlbJFCQuuiRisvywuHUjeTkptNuJeMKp9oggHsfBsVRvHhpG52YXUblwzCcawHyxpS3hU2SB5LVGYktPBZ_fa1IFEoyaaQ/p.png?fv_content=true&size_mode=5">
    <img id="pic" src="https://previews.dropbox.com/p/thumb/ABEarBVaJ3Ug4VmGkWSb8DUt_9PpklrATKxWFN50LFhfXaamUukzVpMI3oh4qmMHRRC16EAxRWGJ6j6CYbZMUyXT0yzGRt0RPrwEUdgnk4U--0Ttkv0PqV1vkbCFi2r9GVmgaVKFTV5ROrJNPJiqxFSkldF7e8h5RCxj2D3lVrGm46xuBnyStSz81RbE3Zz_HBfhH2FzkAkuKl2kFWu9iZmspffVokwNUzrMwH1zPbx65Ez1IBnMTo4L8a0H8JeP9xlCVndF8LGTJslZfrYeHfsEwoPXdttH698H9978yhFM4c29BYBD3xW5ShFRrFfABg_bHQqIuFs2aRu59kZS0SVFPpKUo-uhxqcNhO9mAIPNeg/p.jpeg?fv_content=true&size_mode=5">

    </span>`;
}
function loadContact() {}
function loadAbout() {}

const loadNav = () => {
  document.getElementById("main").innerHTML = `
 <div id="mySidebar" class="sidebar">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">About</a>
  <a onclick="loadform()" href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<div id="main">
  <button  id="open" class="openbtn" onclick="openNav()">&#9776; Open Sidebar</button> 
  <h2>Collapsed Sidebar</h2>
  <p>Content...</p>
</div>`;
};

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("open").innerHTML = ``;
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

document.addEventListener("DOMContentLoaded", () => {
  loadNav();
  // appt();
  // loadHome();
  // loadHeader();
});
