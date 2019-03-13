var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cons = require('consolidate'),
	dust = require('dustjs-helpers'),
	pg = require('pg'),
	app = express();


connect = "postgres://u6pasik:6pasik@pascal.fis.agh.edu.pl/u6pasik";

app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/druzyny',function(req, res){
	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();
	client.query('SELECT * from druzyny', function(err, result){
		if(err){
			return console.log('error running query', err);
		}
		console.log('Rendering druzyny');
		res.render('druzyny', {druzyny: result.rows});
		client.end();
	});
});

app.get('/statGrupa',function(req, res){
	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();
	client.query('SELECT * from grupaStat()', function(err, result){
		if(err){
			return console.log('error running query', err);
		}
		console.log('Rendering GrupaStat');
		res.render('grupa', {grupa: result.rows});
		client.end();
	});
});

app.get('/stat18',function(req, res){
	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();
	client.query('SELECT * from jedenosiemstat()', function(err, result){
		if(err){
			return console.log('error running query', err);
		}
		console.log('Rendering 18Stat');
		res.render('18stat', {jedenosiemstat: result.rows});
		client.end();
	});
});

app.get('/statCw',function(req, res){
	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();
	client.query('SELECT * from cwiercfinal()', function(err, result){
		if(err){
			return console.log('error running query', err);
		}
		console.log('Rendering CwiercfinalStat');
		res.render('statinne', {jedenosiemstat: result.rows});
		client.end();
	});
});

app.get('/statPF',function(req, res){
	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();
	client.query('SELECT * from polfinal()', function(err, result){
		if(err){
			return console.log('error running query', err);
		}
		console.log('Rendering PolStat');
		res.render('statinne', {jedenosiemstat: result.rows});
		client.end();
	});
});

app.get('/statF',function(req, res){
	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();
	client.query('SELECT * from final()', function(err, result){
		if(err){
			return console.log('error running query', err);
		}
		console.log('Rendering FinalStat');
		res.render('finalstat', {final: result.rows});
		client.end();
	});
});

app.get('/wynikiGrupa',function(req, res){
	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();
	client.query('SELECT * from spotkaniaGrupa()', function(err, result){
		if(err){
			return console.log('error running query', err);
		}
		console.log('Rendering WynikiGrupa');
		res.render('wynikiGrupa', {wGrupa: result.rows});
		client.end();
	});
});

app.get('/wyniki18',function(req, res){
	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();
	client.query('SELECT * from spotkaniajedenosiem()', function(err, result){
		if(err){
			return console.log('error running query', err);
		}
		console.log('Rendering WynikiGrupa');
		res.render('wynikiJedenOsiem', {wGrupa: result.rows});
		client.end();
	});
});

app.get('/wynikiCw',function(req, res){
	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();
	client.query('SELECT * from spotkaniacwiercfinal()', function(err, result){
		if(err){
			return console.log('error running query', err);
		}
		console.log('Rendering WynikiGrupa');
		res.render('wyniki', {wGrupa: result.rows});
		client.end();
	});
});

app.get('/wynikiPF',function(req, res){
	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();
	client.query('SELECT * from spotkaniapolfinal()', function(err, result){
		if(err){
			return console.log('error running query', err);
		}
		console.log('Rendering WynikiGrupa');
		res.render('wyniki', {wGrupa: result.rows});
		client.end();
	});
});

app.get('/wynikiF',function(req, res){
	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();
	client.query('SELECT * from spotkaniafinal()', function(err, result){
		if(err){
			return console.log('error running query', err);
		}
		console.log('Rendering WynikiGrupa');
		res.render('wyniki', {wGrupa: result.rows});
		client.end();
	});
});

app.post('/login', function(request, response){
	const login = request.body.login;
	const haslo = request.body.haslo;

	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();

	client.query('SELECT a.id_admina, d.* from admin a, druzyny d where (a.login = $1 and a.password = $2)', [login, haslo], function(error, results){
		if(error){
			throw error;
		}
		response.status(200).json(results.rows)
	})
})

app.post('/dodajDruzyne', function(request, response){
	const tabela = request.body.tabela;
  const id_druzyny = request.body.id_druzyny;
  const zwyciestwa = request.body.zwyciestwa;
  const remisy = request.body.remisy;
  const porazki = request.body.porazki;
  const zdobyte = request.body.zdobyte;
  const stracone = request.body.stracone;
	const grupa = request.body.grupa;
	const punkty = request.body.punkty;

	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();

	if(grupa == ""){
		client.query('INSERT INTO '+tabela+' (id_druzyny, zwyciestwa, remisy, porazki, zdobyte_gole, stracone_gole) VALUES ($1, $2, $3, $4, $5, $6)', [id_druzyny, zwyciestwa, remisy, porazki, zdobyte, stracone], function(error, results){
			if(error){
				throw error;
			}
			response.status(200).json(results.rows)
		})
	}else{
		client.query('INSERT INTO '+tabela+' (id_druzyny, zwyciestwa, remisy, porazki, zdobyte_gole, stracone_gole, grupa, punkty) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [id_druzyny, zwyciestwa, remisy, porazki, zdobyte, stracone, grupa, punkty], function(error, results){
			if(error){
				return "Błąd";
			}
			response.status(200).json(results.rows)
		})
	}
})

app.post('/dodajWynik', function(request, response){
	const tabela = request.body.tabela;
  const id_druzyny1 = request.body.id_druzyny1;
  const id_druzyny2 = request.body.id_druzyny2;
  const data = request.body.data;
  const wynik = request.body.wynik;

	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();

	client.query('INSERT INTO '+tabela+' (id_spotkania, id_druzyny1, id_druzyny2, data_spotkania, wynik) VALUES (250, $1, $2, $3, $4)', [id_druzyny1, id_druzyny2, data, wynik], function(error, results){
		if(error){
			throw error;
		}
		response.status(200).json(results.rows)
	})
})

app.post('/usunDruzyne', function(request, response){
	const tabela = request.body.tabela;
  const id_druzyny = request.body.id_druzyny;

	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();

	client.query('DELETE FROM '+tabela+' where (id_druzyny = $1)', [id_druzyny], function(error, results){
		if(error){
			return "Błąd";
		}
		response.status(200).json(results.rows)
	})
})

app.post('/usunWynik', function(request, response){
	const tabela = request.body.tabela;
  const id_druzyny1 = request.body.id_druzyny1;
	const id_druzyny2 = request.body.id_druzyny2;

	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();

	client.query('DELETE FROM '+tabela+' where (id_druzyny1 = $1 and id_druzyny2 = $2)', [id_druzyny1, id_druzyny2], function(error, results){
		if(error){
			return "Błąd";
		}
		response.status(200).json(results.rows)
	})
})

app.post('/aktualizujDruzyne', function(request, response){
	const tabela = request.body.tabela;
  const id_druzyny = request.body.id_druzyny;
  const zwyciestwa = request.body.zwyciestwa;
  const remisy = request.body.remisy;
  const porazki = request.body.porazki;
  const zdobyte = request.body.zdobyte;
  const stracone = request.body.stracone;
	const grupa = request.body.grupa;
	const punkty = request.body.punkty;

	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();

	if(grupa == ""){
		client.query('UPDATE '+tabela+' set zwyciestwa = $1, remisy = $2, porazki = $3, zdobyte_gole = $4, stracone_gole = $5 where id_druzyny = $6', [zwyciestwa, remisy, porazki, zdobyte, stracone,id_druzyny], function(error, results){
			if(error){
				throw error;
			}
			response.status(200).json(results.rows)
		})
	}else{
		client.query('UPDATE '+tabela+' set zwyciestwa = $1, remisy = $2, porazki = $3, zdobyte_gole = $4, stracone_gole = $5, grupa = $6, punkty = $7 where id_druzyny = $8', [zwyciestwa, remisy, porazki, zdobyte, stracone, grupa, punkty, id_druzyny], function(error, results){
			if(error){
				return "Błąd";
			}
			response.status(200).json(results.rows)
		})
	}
})

app.post('/aktualizujWynik', function(request, response){
	const tabela = request.body.tabela;
  const id_druzyny1 = request.body.id_druzyny1;
  const id_druzyny2 = request.body.id_druzyny2;
  const data = request.body.data;
  const wynik = request.body.wynik;

	var client = new pg.Client(connect , function(err, client, done){
	  if (err) {
	   return console.error('error fethcing data',err);
	  }
	 });

	client.connect();

	client.query('UPDATE '+tabela+' set wynik=$1, data_spotkania=$2 where id_druzyny1=$3 and id_druzyny2=$4', [wynik, data, id_druzyny1, id_druzyny2], function(error, results){
		if(error){
			throw error;
		}
		response.status(200).json(results.rows)
	})
})

app.listen(2020, function(){
	console.log('Server Started on port 2020');
});
