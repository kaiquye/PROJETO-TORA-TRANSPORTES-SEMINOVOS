const oracledb = require('oracledb')

class Veiculo {

    async Connection(){
        try {
            let con = await oracledb.getConnection({
                user : 'USU_LEITURA',
                password : 'US369LEI', 
                connectString :  'scantoradb:1521/SITPRD'
            })
            return con
        } catch (error) {
            console.log(error)
            let erro = new Error()
            erro.name = 'SQL ERRO'
            erro.message = 'Erro ao conectar com o oraclo'
            throw erro
        }
    }

    async BuscarVeiculoPelaPlaca({PLACA_VEI}){
        let con = await this.Connection();
        let sql  = `SELECT 
        CG.CG_NOME AS PROPRIETARIO,
        VEI.VEI_PLACA AS PLACA,
        VEI.VEI_ANO AS ANO,
        VEI.VEI_COR AS COR,
        VEI.VEI_CHASSIS AS CHASSI,
        VEI.VEI_MODELO AS MODELO,
        VEI.VEI_CERT_PROP AS NUM_DOC,
        VEI.VEI_RENAVAM AS RENAVAM,
        NVL(VEI.VEI_OBS,' ') AS OBS
        FROM VEICULO VEI 
        INNER JOIN CADASTRO_GERAL CG ON CG.CG_COD = VEI.CG_PROP AND CG.LOC_COD = VEI.LOC_PROP
        WHERE VEI.VEI_PLACA = '${[PLACA_VEI]}' 
        ORDER BY VEI_DT_ATU DESC`
        try {
            console.log(PLACA_VEI)
            let INFORMACOES = await con.execute(sql)
            return INFORMACOES.rows[0] !== undefined ? INFORMACOES.rows[0] : false
        } catch (error) {
            let erro = new Error()
            erro.name = 'SQL ERRO'
            erro.message = 'Erro ao buscar informações do veiculo'
            throw erro
        }
    }
}
module.exports = Veiculo
// PLACAS 
// 'REFRIGERANTES MINAS GERAIS LTDA',
// 'GVP3181',
// null,
// 'XXX',
// null,
// 'XXX',
// null,
// null,
// ' '
// ],
// [
// 'REFRIGERANTES MINAS GERAIS LTDA',
// 'GPI9687',
// null,
// 'XXX',
// null,
// 'XXX',
// null,
// null,
// ' '
// ],
// [
// 'REFRIGERANTES MINAS GERAIS LTDA',
// 'GPI8350',
// null,
// 'XXX',
// null,
// 'XXX',
// null,
// null,
// ' '
// ],
// [
// 'REFRIGERANTES MINAS GERAIS LTDA',
// 'GPI8389',
// null,
// 'XXX',
// null,
// 'XXX',
// null,
// null,
// ' '
// ],
// [
// 'REFRIGERANTES MINAS GERAIS LTDA',
// 'GVP3722',
// null,
// 'XXX',
// null,
// 'XXX',
// null,
// null,
// ' '
// ],
// [
// 'TRANSPORTES MARILI LTDA',
// 'ATM1418',
// 1989,
// 'BRANCO',
// '9BM384024K',
// 'XXX',
// '4566928402',
// null,
// ' '
// ],
// [
// 'TRANSBERTY TRANSPORTES LT',
// 'ICJ1198',
// 1994,
// 'AZUL',
// '9BSTH4X2ZR',
// 'XXX',
// '212.633.23',
// null,
// ' '
// ],
// [
// 'JOAO ESTEVAO DE AQUINO ROSA',
// 'DDD1212',
// null,
// 'BRANCO',
// 'ER34534',
// '132123',
// '23FRWEF',
// 'T4TGG4',
// ' '
// ],
// [
// 'TORA TRANSPORTES LTDA',
// 'COC1234',
// 2000,
// 'BRANCO',
// '432112341',
// 'LS 1924',
// '12343FDSW',
// '1234V43',
// 'MAGNI'
// ],
// [
// 'TORA TRANSPORTES LTDA',
// 'ABC4321',
// 2009,
// 'PRETO',
// 'FD12SA3',
// 'IR RER CS',
// '3A2SD1F321',
// '12F3D1S3A',
// 'MAGNI'
// ],
// [
// 'ROBERSON LUIZ DOS SANTOS LOPES',
// 'ILZ2449',
// 2004,
// 'BRANCO',
// '9AA07072G4C051139',
// 'AG GR',
// '8570578421',
// '834651572',
// 'MAGNI'
// ],
// [
// 'ROBERSON LUIZ DOS SANTOS LOPES',
// 'ILZ2454',
// 2004,
// 'BRANCO',
// '9AA07102G4C051138',
// 'AG GR',
// '8570578430',
// '834652668',
// 'MAGNI'
// ],
// [
// 'KW LOGISTICA E TRANSPORTES LTDA',
// 'CUC4914',
// 2009,
// 'BRANCO',
// '9ADG130399M283855',
// 'SR CA CAR/S.REB/C.A',
// '7202217385',
// '119901323',
// 'MAGNI'
// ],
// [
// 'KW LOGISTICA E TRANSPORTES LTDA',
// 'DTD1445',
// 2008,
// 'BRANCO',
// '9BVP0F0A28E113211',
// 'VM 310 4X2T',
// '8458388985',
// '956067646',
// 'MAGNI'
// ],
// [
// 'BRASALFA TRANSPORTES LTDA',
// 'CLH3811',
// 2005,
// 'BRANCO',
// '9A9CT27225LDJ5242',
// 'SR SRCD 2E',
// '7432735876',
// '848021231',
// 'MAGNI'
// ],
// [
// 'BRASALFA TRANSPORTES LTDA',
// 'CLH3810',
// 2005,
// 'BRANCO',
// '9A9CD27425LDJ241',
// 'SR SRCD 2E',
// '7432735884',
// '847880443',
// 'MAGNI'
// ],
// [
// 'JPM VEICULO DIESEL LTDA',
// 'MTA1601',
// 2002,
// 'BRANCO',
// '9ADGO75222M174737',
// 'CAR/S.REBOQUE/CAR AB',
// '8659665013',
// '779116321',
// 'MAGNI'
// ],
// [
// 'JPM VEICULO DIESEL LTDA',
// 'MTA1602',
// 2002,
// 'CINZA',
// '9ADGO44222M174739',
// 'R/RANDON RE DL',
// '8659664998',
// '779116348',
// 'MAGNI'
// ],
// [
// 'ANTONIO LEANDRO DOS SANTOS TRANSPORTES-ME',
// 'JJC3994',
// 1994,
// 'BRANCO',
// '9BM388054RB036682',
// 'LS 1935',
// '8579624183',
// '627979050',
// 'MAGNI'
// ],
// [
// 'ANTONIO LEANDRO DOS SANTOS',
// 'LUM0556',
// 2004,
// 'VERMELHO',
// '94VB125344S0000412',
// 'SRCAG 3E',
// '8579624159',
// '839760558',
// 'MAGNI'
// ],
// [
// 'TOL TRANSPORTES OSVALDO LTDA',
// 'KNC5096',
// 2004,
// 'BRANCO',
// '9ADG075245M212238',
// 'C BITREM',
// '8541877777',
// '845064509',
// 'MAGNI'
// ],
// [
// 'TOL TRANSPORTES OSVALDO LTDA',
// 'LCL1923',
// 2004,
// 'BRANCO',
// '9ADG075245M212237',
// 'C BITREM',
// '8541877769',
// '845064304',
// 'MAGNI'
// ],
// [
// 'MAURICIO BORGES DA SILVA',
// 'KTP0370',
// 2010,
// 'AZUL',
// '34400713036451',
// 'L 1113',
// '8289347713',
// '309377897',
// 'MAGNI'
// ],
// [
// 'TOL TRANSPORTES OSVALDO LTDA',
// 'IMO2356',
// 2005,
// 'BRANCO',
// '9ADGO75255M219714',
// 'SR CA',
// '858785412',
// '858785412',
// 'MAGNI'
// ],
// [
// 'TOL TRANSPORTES OSVALDO LTDA',
// 'IMO2344',
// 2005,
// 'BRANCO',
// '9ADGO75255M219715',
// 'SR CA',
// '858783851',
// '858783851',
// 'MAGNI'
// ],
// [
// 'LUIZ OLINTO FERREIRA NETO',
// 'MYM1819',
// 2007,
// 'VERMELHO',
// '9AA07143G7C069078',
// 'SEMI-REBOQUE',
// '7983990953',
// '924681675',
// 'MAGNI'
// ],
// [
// 'ROGERIO APARECIDO DA COSTA',
// 'DBB9541',
// 2005,
// 'PRATA',
// '9BFYCTET25BB52168',
// 'CARGO 4331',
// '8184048678',
// '859873404',
// 'MAGNI'
// ],
// [
// 'MRS LOGISTICA S.A.',
// 'CTE0001',
// 2010,
// 'LARANJA',
// null,
// 'PRANCHA',
// null,
// null,
// ' '
// ],
// [
// 'SERGIO NICARETTA',
// 'IJL1382',
// 2000,
// 'LARANJA',
// '9AA07072GYC029352',
// 'GRANELEIRO',
// '5868668177',
// null,
// ' '
// ],
// [
// 'RONEI CLEBES SILVEIRA DE ALMEIDA',
// 'IKD2885',
// 2001,
// 'BRANCO',
// '9AA07072C1C034071',
// 'GRANELEIRO',
// '6082493293',
// null,
// ' '
// ],
// [
// 'RONEI CLEBES SILVEIRA DE ALMEIDA',
// 'IKD2879',
// 2001,
// 'BRANCO',
// '9AA07102C1C034070',
// 'GRANELEIRO',
// '6082493374',
// '76329572-8',
// ' '
// ],
// [
// 'VANDILEA FERREIRA LIMA',
// 'GTS0022',
// 1990,
// 'BRANCO',
// '3265522',
// '1',
// '55254646456',
// '45646465',
// ' '
// ],
// [
// 'MARCELO PEREIRA DE LIMA',
// 'KTJ1205',
// 1990,
// 'BRANCO',
// '9BWXTN4T1LCB25964',
// '14210',
// '5568336209',
// '315475498',
// ' '
// ],
// [
// 'IMMER CAMPOS DE BRITO',
// 'DJB0979',
// 2004,
// 'BRANCO',
// '94BA125344V005290',
// 'GRANELEIRO',
// '5522947051',
// null,
// ' '
// ],
// [
// 'IMMER CAMPOS DE BRITO',
// 'DJB0983',
// 2004,
// 'BRANCO',
// '9BSP4X2A043554311',
// 'P 114  330',
// '5523007699',
// '831583231',
// ' '
// ],
// [
// 'LUIZ CARLOS RANDO',
// 'AJC8915',
// 2002,
// 'PRETO',
// '9AA07072G2C036485',
// 'GRANELEIRO',
// '5853916056',
// null,
// ' '
// ],
// [
// 'LUIZ CARLOS RANDO',
// 'AJC8914',
// 2002,
// 'PRETO',
// '9AA07102G2C036484',
// 'GRANELEIRO',
// '5853645710',
// null,
// ' '
// ],
// [
// 'LUIZ CARLOS RANDO',
// 'GKM9637',
// 1993,
// 'BRANCO',
// '9BSRH4X2ZP3356209',
// 'R 113  H  360',
// '5846797136',
// '615542972',
// ' '
// ],
// [
// 'SIRIUS TRANSPORTES LTDA',
// 'MUW9678',
// 2004,
// 'BRANCO',
// '9BW2M82T55R504619',
// '23220',
// '5913887308',
// '844581402',
// ' '
// ],
// [
// 'ANTONIO MAGNUS SCHWANCHI',
// 'IKI8274',
// 2001,
// 'AZUL',
// '9BM6953011B287169',
// '1620',
// '6194855243',
// '770203477',
// ' '
// ],
// [
// 'PEDRO ALVES MARTINS',
// 'ILW1525',
// 2004,
// 'BRANCO',
// '9BFYCN8F64BB35860',
// 'CARGO',
// '5814490876',
// '829505513',
// ' '
// ],
// [
// 'PEDRO ALVES MARTINS',
// 'BYB8246',
// 1981,
// 'AZUL',
// '34504512525160',
// '1519',
// '5788160690',
// '179481177',
// ' '
// ],
// [
// 'TRANSPORTES DELLA VOLPE S/A COM. E IND.',
// 'CBR9389',
// 1996,
// 'LARANJA',
// '9ADP12430TS124251',
// 'GRADE BAIXA',
// '5989278914',
// '665076479',
// ' '
// ],
// [
// 'JOAO DO CARMO DE MORAIS',
// 'AAB8229',
// 1982,
// 'BRANCO',
// '9BSTH4X2Z03212571',
// 'T  112  H',
// '6066377632',
// '51.020548-8',
// ' '
// ],
// [
// 'LUIZ PEREIRA DA SILVA',
// 'KMI1361',
// 1987,
// 'BRANCO',
// '9BVN0A1AOHE613810',
// 'N 10   TURBO II',
// '5962234479',
// '31.169093-9',
// ' '
// ],
// [
// 'ALEXANDRE LUZ DE OLIVEIRA',
// 'GNA8511',
// 1993,
// 'BRANCO',
// '9BVN3A4AOPE636765',
// 'NL 12   410',
// '5873872089',
// '614176565',
// ' '
// ],
// [
// 'TRANSP. LAURO VERONEZI LTDA',
// 'GKM7241',
// 1984,
// 'AMARELO',
// '34500212634624',
// '1313',
// '6210007523',
// '263756475',
// ' '
// ],
// [
// 'SEBASTIAO DE SOUZA',
// 'BWK9126',
// 1992,
// 'BRANCO',
// '9AUG12430N1019962',
// 'GRANELEIRO',
// '5731848048',
// '604126786',
// ' '
// ],
// [
// 'SEBASTIAO DE SOUZA',
// 'BXE4039',
// 1986,
// 'BRANCO',
// '9BSTH4X2ZG3223562',
// 'T.112HS',
// '5950677095',
// '407105034',
// ' '
// ],
// [
// 'ANTONIO BRIDGE',
// 'HCG0290',
// null,
// 'PRATA',
// null,
// 'UNO',
// null,
// null,
// ' '
// ],
// [
// 'SONIA APARECIDA DE L PANDINI',
// 'HQN5340',
// 1993,
// 'GRENA',
// '9AUG12430P1021273',
// 'ABERTA',
// '6345432702',
// '608067563',
// ' '
// ],
// [
// 'FRANCISCO OLIVEIRA GUIMARAES',
// 'JOE0355',
// 1984,
// 'VERMELHO',
// '34500312647064',
// 'L1313',
// '5377051668',
// '217193811',
// ' '
// ],
// [
// 'JOSE JANUARIO DA SILVA',
// 'KOH6143',
// 1971,
// 'AMARELO',
// '34540715000435',
// '2013',
// '5330697634',
// '309634865',
// ' '
// ],
// [
// 'FABIO BIASSOTO',
// 'BWI4092',
// 1983,
// 'VERMELHO',
// '34403312323569',
// 'L1113',
// '5526850680',
// '420899278',
// ' '
// ],
// [
// 'JOAO AUGUSTO COSTA SILVEIRA',
// 'HZU2024',
// 2002,
// 'BRANCO',
// '9BW2M82T22R208999',
// '23220',
// '5815365439',
// '480783590',
// ' '
// ],
// [
// 'RATIOENDER CASTILHO MELO',
// 'JKR0578',
// 1992,
// 'BRANCO',
// '9ADG12430NS096568',
// 'SR GR TR',
// '6223981566',
// '606518061',
// ' '
// ],
// [
// 'RAMOSUL TRANSPORTES LTDA',
// 'AJX9628',
// 2001,
// 'VERMELHO',
// '9ADG124311M164863',
// 'SR CA',
// '5956670327',
// '76.056645-3',
// ' '
// ],
// [
// 'ARI CITTON',
// 'IJE6009',
// 1999,
// 'BRANCO',
// '9BM693128XB209513',
// '1720',
// '5759255084',
// '726354546',
// ' '
// ],
// [
// 'LEICAR CENTRAL DE APOIO E REPARADORA DE VECULOS LTDA',
// 'KAD2010',
// 1993,
// 'BRANCO',
// '9BM388054PB984786',
// 'LS 1935',
// '6346733633',
// '613109546',
// ' '
// ],
// [
// 'MEGA TRANSPORTES LTDA',
// 'GZV2840',
// 2003,
// 'PRATA',
// '9BSR4X2AO33537902',
// 'R 124',
// '5947156657',
// '796630950',
// ' '
// ],
// [
// 'JM LOCACAO LOGISTICA J DE FORA',
// 'LNB5304',
// 2000,
// 'CINZA',
// '9EL11FR03YV003869',
// 'SAIDER',
// '5726660435',
// '733024696',
// ' '
// ],
// [
// 'JADIEL MUNIZ MENDES DE JUSSIAPE',
// 'JOX4090',
// 2004,
// 'BRANCO',
// '9BM6953014B388312',
// '1620',
// '5666987425',
// '834739658',
// ' '
// ],
// [
// 'MEGA TRANSPORTES LTDA',
// 'JJZ3209',
// 2002,
// 'PRATA',
// '9AAO7102G2CO38178',
// 'AG GR',
// '5840202092',
// '786270942',
// ' '
// ],
// [
// 'PAULO XAVIER',
// 'JDR0669',
// 1985,
// 'VERMELHO',
// '34401412665135REM',
// 'L 1113',
// '5923824570',
// '113614314',
// ' '
// ],
// [
// 'CLOVIS ALVES DE OLIVEIRA',
// 'KUI1182',
// 1969,
// 'VERDE',
// '34460713038968',
// 'L 1113',
// '5274512786',
// '304960581',
// ' '
// ],
// [
// 'VALDIR DOS SANTOS',
// 'BHM3860',
// 1970,
// 'AZUL',
// '34403214011655',
// 'CARGA ABERTA',
// '6099543930',
// '357113691',
// ' '
// ],
// [
// 'ROQUE ANTONIO SARTOR',
// 'AGW3784',
// 1997,
// 'BRANCO',
// '9AA071330VC020129',
// 'REB',
// '5798199920',
// '670241598',
// ' '
// ],
// [
// 'EMPREENDIMENTOS RODEIRO LTDA',
// 'GVK5656',
// 2003,
// 'VERMELHO',
// '9ADG075234M192663',
// 'SR CA',
// '5194775640',
// '811450791',
// ' '
// ],
// [
// 'EMPREENDIMENTOS RODEIRO LTDA',
// 'GVK5600',
// 2003,
// 'VERMELHO',
// '9ADG075234M192664',
// 'SR CA',
// '5194776396',
// '811450163',
// ' '
// ],
// [
// 'LUIZ ROBERTO VON ZESCHAU',
// 'MBB6990',
// 1996,
// 'BRANCO',
// '9ADG12430TM125183',
// 'SR GR TR',
// '5974898750',
// '666424837',
// ' '
// ],
// [
// 'LUIZ ROBERTO VON ZESCHAU',
// 'KPM6461',
// 1997,
// 'VERMELHO',
// '9ADG12430TM125183',
// 'T114',
// '5974898750',
// '725546093',
// ' '
// ],
// [
// 'ANTONIO DA SILVA SANTOS',
// 'BXG7437',
// 1973,
// 'AZUL',
// '34403217044809',
// 'L 1113',
// '6090591410',
// '372091580',
// ' '
// ],
// [
// 'NEREU MENGUE CARLOS E CIA LTDA',
// 'ILH1389',
// 2004,
// 'BRANCO',
// '9ADG124344M203032',
// 'S/REBOQUE',
// '5814458000',
// '82948736-0',
// ' '
// ],
// [
// 'PANIFICADORA SERVE BEM LTDA',
// 'KMC3632',
// 2004,
// 'BRANCO',
// '94BA125344VOO4694',
// 'REB',
// '5682144950',
// '825968534',
// ' '
// ],
// [
// 'PANIFICADORA SERVE BEM LTDA',
// 'KMC3642',
// 2004,
// 'BRANCO',
// '9BFYCTETO4BB34220',
// '4331',
// '5682144968',
// '825968690',
// ' '
// ],
// [
// 'TRANSPORTES E ARMAZENS GERAIS GILVANELLA LTDA',
// 'DBC1771',
// 2005,
// 'VERMELHO',
// '9AA31062G5C055568',
// 'DOLLY',
// '5704416612',
// '854348980',
// ' '
// ],
// [
// 'TRANSPORTES E ARMAZENS GERAIS GILVANELLA LTDA',
// 'DBC1772',
// 2005,
// 'VERMELHO',
// '854350551',
// 'C. ABERTA',
// '5704416647',
// '854350551',
// ' '
// ],
// [
// 'TRANSPORTES E ARMAZENS GERAIS GILVANELLA LTDA',
// 'DBC1718',
// 2005,
// 'VERMELHO',
// '9AAO7092G5C055569',
// 'C. ABERTA',
// '5704416604',
// '854348239',
// ' '
// ],
// [
// 'ANGELO  POLONI  NETO',
// 'MQF0905',
// 2005,
// 'BRANCO',
// '9ADG124355M212712',
// 'REB/RANDON SR CA',
// 'ES N. 5670820521',
// '846435870',
// 'CARRETA GRANELEIRA'
// ],
// [
// 'EDIVALDO LAZARO VILELA',
// 'GON0433',
// 1978,
// 'AZUL',
// '34500212368488',
// 'L 1313',
// '6005334232',
// '262999528',
// ' '
// ],
// [
// 'PARADISO GIOVANELLA TRANSPORTES LTDA',
// 'DBC1642',
// 2004,
// 'PRATA',
// '9BSR6X4AO53561820',
// 'R124',
// '5583682147',
// '842752366',
// ' '
// ],
// [
// 'NEUDI DE SOUZA SILVEIRA',
// 'BWG3583',
// 1973,
// 'BRANCO',
// '111791973',
// 'B110',
// '5520834551',
// '418214859',
// ' '
// ],
// [
// 'ALVARO DENARDI',
// 'JYW5632',
// 1999,
// 'BRANCO',
// '9AU071230X1033337',
// 'CA123',
// '6222729901',
// '713452226',
// ' '
// ],
// [
// 'TRANSPORTADORA DENARDI LTDA',
// 'BXI0989',
// 1995,
// 'BRANCO',
// '9BSTH4X2ZS2215147',
// 'T113',
// '5989652069',
// '642153892',
// ' '
// ],
// [
// 'JOSE RONALDO DE OLIVEIRA',
// 'GNG4824',
// 1986,
// 'BRANCO',
// '68462',
// 'RANDON',
// '6000672814',
// '392320142',
// ' '
// ],
// [
// 'ELIO ROSSONI',
// 'AFQ8717',
// 1995,
// 'BEGE',
// '9BVN2B540SE650603',
// 'NL 12 360',
// '5806698390',
// '644907320',
// ' '
// ],
// [
// 'OTTO LUCIANO HERNANDES',
// 'CLT5067',
// 1979,
// 'VERDE',
// '3301261',
// 'TRATOR',
// '5708162003',
// '363985280',
// ' '
// ],
// [
// 'VALMIR FERREIRA DA SILVA',
// 'GSH4398',
// 1989,
// 'PRATA',
// '9BVN2B4AOKE620420',
// 'N 12',
// '5676460810',
// '247039667',
// ' '
// ],
// [
// 'VANDERLITO ALVES DE SOUZA E CIA LTDA',
// 'JOX1773',
// 2004,
// 'BRANCO',
// '9AA07102G4CO47714',
// 'CARRETA ABERTA',
// '5533926352',
// '825792045',
