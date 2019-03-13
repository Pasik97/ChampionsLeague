function show(){
  var nav = document.getElementById("header");
  var foot = document.getElementById("foot");
  var stat = document.getElementById("stat");
  nav.style.top=0;
  foot.style.bottom=0;
};

function showTeams(){
  var teams = document.getElementById("teams");
  var margin = 150;
  var opa = 1;
  teams.style.marginTop=margin;
  teams.style.opacity=opa;
};

function showStat(){
  var stat = document.getElementById("stat");
  var draws = document.getElementById("draws");
  draws.style.left=2000;
  stat.style.left=0;
};

function showDraws(){
  var draws = document.getElementById("draws");
  var stat = document.getElementById("stat");
  stat.style.left=-2000;
  draws.style.left=0;
};

function show1(){
  document.getElementById("kolejka1").style.display="block";
  document.getElementById("kolejka2").style.display="none";
  document.getElementById("kolejka3").style.display="none";
  document.getElementById("kolejka4").style.display="none";
  document.getElementById("kolejka5").style.display="none";
  document.getElementById("kolejka6").style.display="none";
};

function show2(){
  document.getElementById("kolejka2").style.display="block";
  document.getElementById("kolejka1").style.display="none";
  document.getElementById("kolejka3").style.display="none";
  document.getElementById("kolejka4").style.display="none";
  document.getElementById("kolejka5").style.display="none";
  document.getElementById("kolejka6").style.display="none";
};

function show3(){
  document.getElementById("kolejka3").style.display="block";
  document.getElementById("kolejka2").style.display="none";
  document.getElementById("kolejka1").style.display="none";
  document.getElementById("kolejka4").style.display="none";
  document.getElementById("kolejka5").style.display="none";
  document.getElementById("kolejka6").style.display="none";
};

function show4(){
  document.getElementById("kolejka4").style.display="block";
  document.getElementById("kolejka2").style.display="none";
  document.getElementById("kolejka3").style.display="none";
  document.getElementById("kolejka1").style.display="none";
  document.getElementById("kolejka5").style.display="none";
  document.getElementById("kolejka6").style.display="none";
};

function show5(){
  document.getElementById("kolejka5").style.display="block";
  document.getElementById("kolejka2").style.display="none";
  document.getElementById("kolejka3").style.display="none";
  document.getElementById("kolejka4").style.display="none";
  document.getElementById("kolejka1").style.display="none";
  document.getElementById("kolejka6").style.display="none";
};

function show6(){
  document.getElementById("kolejka6").style.display="block";
  document.getElementById("kolejka2").style.display="none";
  document.getElementById("kolejka3").style.display="none";
  document.getElementById("kolejka4").style.display="none";
  document.getElementById("kolejka5").style.display="none";
  document.getElementById("kolejka1").style.display="none";
};


function showJ81(){
  document.getElementById("kolejkaJ81").style.display="block";
  document.getElementById("kolejkaJ82").style.display="none";
};

function showJ82(){
  document.getElementById("kolejkaJ82").style.display="block";
  document.getElementById("kolejkaJ81").style.display="none";
};

function log(form) {
  login = document.getElementById('login').value;
  password = document.getElementById('password').value;

  if (login == "" || password == "") {
    alert("Uzupełnij wszystkie pola!");
    return;
  }

  const daneLogowania  = {
    login : login,
    haslo : password
  };

  fetch("http://149.156.109.180:2020/login",{
    method: 'POST',
    body: JSON.stringify(daneLogowania),
    headers : {
      'Content-type' : 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
  .then(res => res.json()).then(res =>{

    console.log(res.length == 0);
      if(res.length == 0)
        alert("Zły login lub hasło");
      else
      {
        window.sessionStorage.setItem("uzytkownik",res[0].id_uzytkownika);
        window.sessionStorage.setItem("status","zalogowany");

        var show;
        var i;
        show = '<div id="druzyny"><table><tr><th>ID Drużyny</th><th>Nazwa Drużyny</th></tr>';
        for(i=0;i<res.length;i++){
          show = show + '<tr><td>' + res[i].id_druzyny + '</th><td>' + res[i].nazwa + '</td></tr>';
        }
        show=show+"</tr></table></div>";

        document.getElementById("formDiv").style.display='none';
        document.getElementById("foot").style.position='relative';
        document.getElementById("result").innerHTML=show;

        var add=`
        <table><tr><th>Dodaj:</th><th>Usun:</th><th>Aktualizuj:</th></tr>
      		<tr><td><ul>
      			<li onclick="addTeam()">Drużyne</li>
      			<li onclick="addWynik()">Wynik</li>
      		</ul></td>
      	<td><ul>
      		<li onclick="deleteTeam()">Drużyne</li>
      		<li onclick="deleteWynik()">Wynik</li>
      	</ul></td>
        <td><ul>
      		<li onclick="updateStat()">Drużyne</li>
      		<li onclick="updateWynik()">Wynik</li>
      	</ul></td></tr></table>
        <div id="dodajDruzyne">
        Uwaga dane zostaną dodane wyłącznie jeśli drużyna nie jest jeszcze dodana! </br> Pole Grupa i Punkty uzupełnij tylko dodając drużyne do tabeli Grupa
      		<table>
      				<tr><td width="40%" style="padding-top: 15px">Poziom rozgrywek<select id="gdzie"><option value="grupa">Grupa</option><option value="jedna_osma_finalu">1/8</option><option value="cwiercfinal">Ćwierćfinał</option>
      					<option value="polfinal">Półfinał</option><option value="final">Finał</option></select></tr>
              <tr><td width="40%" style="padding-top: 15px">Grupa</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idAddgrupa' id='idAddgrupa'/></td></tr>
      	      <tr><td width="40%" style="padding-top: 15px">ID Drużyny</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idAdd' id='idAdd'/></td></tr>
              <tr><td width="40%" style="padding-top: 15px">Zwycięstwa</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idAddwin' id='idAddwin'/></td></tr>
              <tr><td width="40%" style="padding-top: 15px">Remisy</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idAdddraw' id='idAdddraw'/></td></tr>
              <tr><td width="40%" style="padding-top: 15px">Porażki</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idAddlse' id='idAddlose'/></td></tr>
              <tr><td width="40%" style="padding-top: 15px">Zdobyte gole</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idAddgoals' id='idAddgoals'/></td></tr>
              <tr><td width="40%" style="padding-top: 15px">Stracone gole</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idAddgoals2' id='idAddgoals2'/></td></tr>
              <tr><td width="40%" style="padding-top: 15px">Punkty</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idAddpkt' id='idAddpkt'/></td></tr>
      	      <tr><td colspan="2" style="padding-top: 15px; padding-bottom: 10px; text-align: center;"><input type='submit' name='submitLogin' onclick='addNewTeam(this.form);' value='Dodaj' /></td></tr>
      	  </table>
      	</div>
      	<div id="dodajWynik" style="display: none;">
          Uwaga dane zostaną dodane wyłącznie jeśli obie drużyny </br> są zapisane w poziomie rozgrywek
      		<table>
      				<tr><td width="40%" style="padding-top: 15px">Poziom rozgrywek<select id="gdzie2"><option value="spotkania_grupa">Grupa</option><option value="spotkania_1/8">1/8</option><option value="spotkania_cwiercfinal">Ćwierćfinał</option>
      					<option value="spotkania_polfinal">Półfinał</option><option value="spotaknia_final">Finał</option></select></tr>
      	      <tr><td width="40%" style="padding-top: 15px">ID Drużyny 1</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idAdd1' id='idAdd1'/></td></tr>
      				<tr><td width="40%" style="padding-top: 15px">ID Drużyny 2</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idAdd2' id='idAdd2'/></td></tr>
      				<tr><td width="40%" style="padding-top: 15px">Wynik (DR1-DR2)</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='goals' id='goals'/></td></tr>
      				<tr><td width="40%" style="padding-top: 15px">Data Spotkania (dd-mm-rr)</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='data' id='data'/></td></tr>
      	      <tr><td colspan="2" style="padding-top: 15px; padding-bottom: 10px; text-align: center;"><input type='submit' name='submitLogin' onclick='addNewScore(this.form);' value='Dodaj' /></td></tr>
      	  </table>
      	</div>
      	<div id="usunDruzyne" style="display: none;">
        Uwaga Dane nie zostaną usunięte jeżeli dana drużyna </br> ma już zapisanie wyniki spotkania
      		<table>
      			<tr><td width="40%" style="padding-top: 15px">Poziom rozgrywek<select id="skad"><option value="grupa">Grupa</option><option value="jedna_osma_finalu">1/8</option><option value="cwiercfinal">Ćwierćfinał</option>
      				<option value="polfinal">Półfinał</option><option value="final">Finał</option></select></tr>
      			<tr><td width="40%" style="padding-top: 15px">ID Drużyny</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idDel' id='idDel'/></td></tr>
      			<tr><td colspan="2" style="padding-top: 15px; padding-bottom: 10px; text-align: center;"><input type='submit' name='submitLogin' onclick='deleteTeam2(this.form);' value='Usuń' /></td></tr>
      	  </table>
      	</div>
      	<div id="usunWynik" style="display: none;">
      		<table>
            <tr><td width="40%" style="padding-top: 15px">Poziom rozgrywek<select id="skad2"><option value="spotkania_grupa">Grupa</option><option value="spotkania_1/8">1/8</option><option value="spotkania_cwiercfinal">Ćwierćfinał</option>
              <option value="spotkania_polfinal">Półfinał</option><option value="spotaknia_final">Finał</option></select></tr>
      			<tr><td width="40%" style="padding-top: 15px">ID Drużyny 1</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idDel1' id='idDel1'/></td></tr>
            <tr><td width="40%" style="padding-top: 15px">ID Drużyny 2</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idDel2' id='idDel2'/></td></tr>
      			<tr><td colspan="2" style="padding-top: 15px; padding-bottom: 10px; text-align: center;"><input type='submit' name='submitLogin' onclick='deleteScore(this.form);' value='Usuń' /></td></tr>
      	  </table>
      	</div>
        <div id="aktualizujStat" style="display: none;">
        Pole Grupa i Punkty uzupełnij tylko akutalizujac drużyne z tabeli Grupa
      		<table>
          <tr><td width="40%" style="padding-top: 15px">Poziom rozgrywek<select id="co"><option value="grupa">Grupa</option><option value="jedna_osma_finalu">1/8</option><option value="cwiercfinal">Ćwierćfinał</option>
            <option value="polfinal">Półfinał</option><option value="final">Finał</option></select></tr>
          <tr><td width="40%" style="padding-top: 15px">Grupa</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idUpdategrupa' id='idUpdategrupa'/></td></tr>
          <tr><td width="40%" style="padding-top: 15px">ID Drużyny</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idUpdate' id='idUpdate'/></td></tr>
          <tr><td width="40%" style="padding-top: 15px">Zwycięstwa</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idUpdatewin' id='idUpdatewin'/></td></tr>
          <tr><td width="40%" style="padding-top: 15px">Remisy</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idUpdatedraw' id='idUpdatedraw'/></td></tr>
          <tr><td width="40%" style="padding-top: 15px">Porażki</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idUpdatelse' id='idUpdatelose'/></td></tr>
          <tr><td width="40%" style="padding-top: 15px">Zdobyte gole</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idUpdategoals' id='idUpdategoals'/></td></tr>
          <tr><td width="40%" style="padding-top: 15px">Stracone gole</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idUpdategoals2' id='idUpdategoals2'/></td></tr>
          <tr><td width="40%" style="padding-top: 15px">Punkty</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idUpdatepkt' id='idUpdatepkt'/></td></tr>
          <tr><td colspan="2" style="padding-top: 15px; padding-bottom: 10px; text-align: center;"><input type='submit' name='submitLogin' onclick='UpdateTeam(this.form);' value='Aktualizuj' /></td></tr>
      	  </table>
      	</div>
        <div id="aktualizujWynik" style="display: none;">
      		<table>
          <tr><td width="40%" style="padding-top: 15px">Poziom rozgrywek<select id="co2"><option value="spotkania_grupa">Grupa</option><option value="spotkania_1/8">1/8</option><option value="spotkania_cwiercfinal">Ćwierćfinał</option>
            <option value="spotkania_polfinal">Półfinał</option><option value="spotaknia_final">Finał</option></select></tr>
          <tr><td width="40%" style="padding-top: 15px">ID Drużyny 1</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idUpdate1' id='idUpdate1'/></td></tr>
          <tr><td width="40%" style="padding-top: 15px">ID Drużyny 2</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='idUpdate2' id='idUpdate2'/></td></tr>
          <tr><td width="40%" style="padding-top: 15px">Wynik (DR1-DR2)</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='goals' id='Updategoals'/></td></tr>
          <tr><td width="40%" style="padding-top: 15px">Data Spotkania (dd-mm-rr)</td><td style="padding-top: 15px; padding-right: 20px"><input type='text' value='' name='data' id='Updatedata'/></td></tr>
          <tr><td colspan="2" style="padding-top: 15px; padding-bottom: 10px; text-align: center;"><input type='submit' name='submitLogin' onclick='UpdateScore(this.form);' value='Aktualizuj' /></td></tr>
      	  </table>
      	</div>`

        document.getElementById("addNew").innerHTML=add;
        document.getElementById("addNew").style.display='flex';

      }
  })
}

function addTeam(){
  document.getElementById("dodajWynik").style.display='none';
  document.getElementById("usunDruzyne").style.display='none';
  document.getElementById("usunWynik").style.display='none';
  document.getElementById("dodajDruzyne").style.display='block';
  document.getElementById("aktualizujWynik").style.display='none';
  document.getElementById("aktualizujStat").style.display='none';
}

function addWynik(){
  document.getElementById("dodajWynik").style.display='block';
  document.getElementById("usunDruzyne").style.display='none';
  document.getElementById("usunWynik").style.display='none';
  document.getElementById("dodajDruzyne").style.display='none';
  document.getElementById("aktualizujWynik").style.display='none';
  document.getElementById("aktualizujStat").style.display='none';
}

function deleteTeam(){
  document.getElementById("dodajWynik").style.display='none';
  document.getElementById("usunDruzyne").style.display='block';
  document.getElementById("usunWynik").style.display='none';
  document.getElementById("dodajDruzyne").style.display='none';
  document.getElementById("aktualizujWynik").style.display='none';
  document.getElementById("aktualizujStat").style.display='none';
}

function deleteWynik(){
  document.getElementById("dodajWynik").style.display='none';
  document.getElementById("usunDruzyne").style.display='none';
  document.getElementById("usunWynik").style.display='block';
  document.getElementById("dodajDruzyne").style.display='none';
  document.getElementById("aktualizujWynik").style.display='none';
  document.getElementById("aktualizujStat").style.display='none';
}

function updateStat(){
  document.getElementById("dodajWynik").style.display='none';
  document.getElementById("usunDruzyne").style.display='none';
  document.getElementById("usunWynik").style.display='none';
  document.getElementById("dodajDruzyne").style.display='none';
  document.getElementById("aktualizujWynik").style.display='none';
  document.getElementById("aktualizujStat").style.display='block';
}

function updateWynik(){
  document.getElementById("dodajWynik").style.display='none';
  document.getElementById("usunDruzyne").style.display='none';
  document.getElementById("usunWynik").style.display='none';
  document.getElementById("dodajDruzyne").style.display='none';
  document.getElementById("aktualizujWynik").style.display='block';
  document.getElementById("aktualizujStat").style.display='none';
}

function addNewTeam(form){
  tabela = document.getElementById('gdzie').value;
  id_druzyny = document.getElementById('idAdd').value;
  zwyciestwa = document.getElementById('idAddwin').value;
  remisy = document.getElementById('idAdddraw').value;
  porazki = document.getElementById('idAddlose').value;
  zdobyte = document.getElementById('idAddgoals').value;
  stracone = document.getElementById('idAddgoals2').value;
  grupa = document.getElementById('idAddgrupa').value;
  punkty = document.getElementById('idAddpkt').value;

  if (tabela == "" || id_druzyny == "" || zwyciestwa == "" || remisy == "" || porazki == "" || zdobyte == "" || stracone == "") {
    alert("Uzupełnij wymagane pola!");
    return;
  }

  const daneDoDodania  = {
    tabela : tabela,
    id_druzyny : id_druzyny,
    zwyciestwa : zwyciestwa,
    remisy: remisy,
    porazki: porazki,
    zdobyte: zdobyte,
    stracone: stracone,
    grupa : grupa,
    punkty: punkty
  };


  fetch("http://149.156.109.180:2020/dodajDruzyne",{
    method: 'POST',
    body: JSON.stringify(daneDoDodania),
    headers : {
      'Content-type' : 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
  .then(res => res.json()).then(res =>{


    alert("Dane zostały dodane!");
  })
}

function addNewScore(form){
  tabela = document.getElementById('gdzie2').value;
  id_druzyny1 = document.getElementById('idAdd1').value;
  id_druzyny2 = document.getElementById('idAdd2').value;
  goals = document.getElementById('goals').value;
  data = document.getElementById('data').value;

  if (tabela == "" || id_druzyny1 == "" || id_druzyny2 == "" || goals == "" || data == "") {
    alert("Uzupełnij wszystkie pola!");
    return;
  }

  const daneDoDodania  = {
    tabela : tabela,
    id_druzyny1 : id_druzyny1,
    id_druzyny2 : id_druzyny2,
    wynik: goals,
    data: data
  };


  fetch("http://149.156.109.180:2020/dodajWynik",{
    method: 'POST',
    body: JSON.stringify(daneDoDodania),
    headers : {
      'Content-type' : 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
  .then(res => res.json()).then(res =>{


    alert("Dane zostały dodane!");
  })
}

function deleteTeam2(form){
  tabela = document.getElementById('skad').value;
  id_druzyny = document.getElementById('idDel').value;

  if (id_druzyny == "") {
    alert("Uzupełnij wszystkie pola!");
    return;
  }

  const daneDoUsuniecia  = {
    tabela : tabela,
    id_druzyny : id_druzyny
  };



  fetch("http://149.156.109.180:2020/usunDruzyne",{
    method: 'POST',
    body: JSON.stringify(daneDoUsuniecia),
    headers : {
      'Content-type' : 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
  .then(res => res.json()).then(res =>{


    alert("Dane zostały usuniete!");
  })
}

function deleteScore(form){
  tabela = document.getElementById('skad2').value;
  id_druzyny1 = document.getElementById('idDel1').value;
  id_druzyny2 = document.getElementById('idDel2').value;

  if (id_druzyny1 == "") {
    alert("Uzupełnij wszystkie pola!");
    return;
  }

  const daneDoUsuniecia  = {
    tabela : tabela,
    id_druzyny1 : id_druzyny1,
    id_druzyny2 : id_druzyny2
  };

  fetch("http://149.156.109.180:2020/usunWynik",{
    method: 'POST',
    body: JSON.stringify(daneDoUsuniecia),
    headers : {
      'Content-type' : 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
  .then(res => res.json()).then(res =>{

    alert("Dane zostały usuniete!");
  })
}

function UpdateTeam(form){
  tabela = document.getElementById('co').value;
  id_druzyny = document.getElementById('idUpdate').value;
  zwyciestwa = document.getElementById('idUpdatewin').value;
  remisy = document.getElementById('idUpdatedraw').value;
  porazki = document.getElementById('idUpdatelose').value;
  zdobyte = document.getElementById('idUpdategoals').value;
  stracone = document.getElementById('idUpdategoals2').value;
  grupa = document.getElementById('idUpdategrupa').value;
  punkty = document.getElementById('idUpdatepkt').value;

  if (tabela == "" || id_druzyny == "" || zwyciestwa == "" || remisy == "" || porazki == "" || zdobyte == "" || stracone == "") {
    alert("Uzupełnij wymagane pola!");
    return;
  }

  const daneDoAktualizacji  = {
    tabela : tabela,
    id_druzyny : id_druzyny,
    zwyciestwa : zwyciestwa,
    remisy: remisy,
    porazki: porazki,
    zdobyte: zdobyte,
    stracone: stracone,
    grupa : grupa,
    punkty: punkty
  };


  fetch("http://149.156.109.180:2020/aktualizujDruzyne",{
    method: 'POST',
    body: JSON.stringify(daneDoAktualizacji),
    headers : {
      'Content-type' : 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
  .then(res => res.json()).then(res =>{

    alert("Dane zostały zaktualizowane!");
  })
}

function UpdateScore(form){
  tabela = document.getElementById('co2').value;
  id_druzyny1 = document.getElementById('idUpdate1').value;
  id_druzyny2 = document.getElementById('idUpdate2').value;
  goals = document.getElementById('Updategoals').value;
  data = document.getElementById('Updatedata').value;

  if (tabela == "" || id_druzyny1 == "" || id_druzyny2 == "" || goals == "" || data == "") {
    alert("Uzupełnij wszystkie pola!");
    return;
  }

  const daneDoAktualizacji  = {
    tabela : tabela,
    id_druzyny1 : id_druzyny1,
    id_druzyny2 : id_druzyny2,
    wynik: goals,
    data: data
  };


  fetch("http://149.156.109.180:2020/aktualizujWynik",{
    method: 'POST',
    body: JSON.stringify(daneDoAktualizacji),
    headers : {
      'Content-type' : 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
  .then(res => res.json()).then(res =>{

    alert("Dane zostały zaktualizowane!");
  })
}
