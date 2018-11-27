const data = [
    {
        state:{
            name: "Abia",
            lga: ["Aba North","Aba South","Arochukwu","Bende","Ikwano","Isiala Ngwa North","Isiala Ngwa South","Isuikwuato","Obingwa","Ohafia","Osisioma","Ugwunagbo","Ukwa East","Ukwa West","Umuahia North","Umuahia South","Umuneochi"]
        } 
    },
    {
        state:{
            name: "Adamawa",
            lga: ["Demsa","Fufore","Ganaye","Gireri","Gombi","Guyuk","Hong","Jada","Lamurde","Madagali","Maiha","Mayo-Belwa","Michika","Mubi North","Mubi South","Numan","Shelleng","Song","Toungo","Yola North","Yola South"]
        } 
    },
    {
        state: {
        name: "Akwa Ibom",
        lga: ["Abak","Eastern Obolo","Eket","Esit Eket","Essien Udim","Etim Ekpo","Etinan","Ibeno","Ibesikpo Asutan","Ibiono Ibom","Ika","Ikono","Ikot Abasi","Ikot Ekpene","Ini","Itu","Mbo","Mkpat Enin","Nsit Atai","Nsit Ibom","Nsit Ubium","Obot Akara","Okobo","Onna","Oron","Oruk Anam","Udung Uko","Ukanafun","Uruan","Urue-Offong Oruko","Uyo"]
    }
    },
    {
        state: {
        name: "Anambra",
        lga: ["Aguata","Anambra East","Anambra West","Anaocha","Awka North","Awka South","Ayamelum","Dunukofia","Ekwusigo","Idemili North","Idemili south","Ihiala","Njikoka","Nnewi North","Nnewi South","Ogbaru","Onitsha North","Onitsha South","Orumba North","Orumba South","Oyi"]
    }
    },
    {
        state: {
        name: "Bauchi",
        lga: ["Alkaleri","Bauchi","Bogoro","Damban","Darazo","Dass","Ganjuwa","Giade","Itas Gadau","Jama'are","Katagum","Kirfi","Misau","Ningi","Shira","Tafawa-Balewa","Toro","Warji","Zaki"]
    }
    },
    {
        state: {
        name: "Bayelsa",
        lga: ["Brass","Ekeremor","Kolokuma Opokuma","Nembe","Ogbia","Sagbama","Southern Jaw","Yenegoa"]
    }
    },
    {
        state: {
        name: "Benue",
        lga:["Ado","Agatu","Apa","Buruku","Gboko","Guma","Gwer East","Gwer West","Katsina-Ala","Konshisha","Kwande","Logo","Makurdi","Obi","Ogbadibo","Oju","Okpokwu","Ohimini","Oturkpo","Tarka","Ukum","Ushongo","Vandeikya"]
    }
    },
    {
        state: {
        name:"Bornu",
        lga: ["Abadam","Askira Uba","Bama","Bayo","Biu","Chibok","Damboa","Dikwa","Gubio","Guzamala","Gwoza","Hawul","Jere","Kaga","Kala Balge","Konduga","Kukawa","Kwaya Kusar","Mafa","Magumeri","Maiduguri","Marte","Mobbar","Monguno","Ngala","Nganzai","Shani"]
    }
    },
    {
        state: {
        name: "Cross River",
        lga: ["Akpabuyo","Odukpani","Akamkpa","Biase","Abi","Ikom","Yarkur","Odubra","Boki","Ogoja","Yala","Obanliku","Obudu","Calabar South","Etung","Bekwara","Bakassi","Calabar Municipality"]
    }
    },
    {
        state: {
        name: "Delta",
        lga: ["Oshimili","Aniocha","Aniocha South","Ika South","Ika North-East","Ndokwa West","Ndokwa East","Isoko south","Isoko North","Bomadi","Burutu","Ughelli South","Ughelli North","Ethiope West","Ethiope East","Sapele","Okpe","Warri North","Warri South","Uvwie","Udu","Warri Central","Ukwani","Oshimili North","Patani"]
    }
    },
    {
        state: {
        name:"Ebonyi",
        lga: ["Afikpo South","Afikpo North","Onicha","Ohaozara","Abakaliki","Ishielu","lkwo","Ezza","Ezza South","Ohaukwu","Ebonyi","Ivo"]
    }
    },
    {
        state: {
        name: "Edo",
        lga: ["Esan North-East","Esan Central","Esan West","Egor","Ukpoba","Central","Etsako Central","Igueben","Oredo","Ovia SouthWest","Ovia South-East","Orhionwon","Uhunmwonde","Etsako East","Esan South-East"]
    }
    },
    {
        state: {
        name:"Ekiti",
        lga: ["Ado","Ekiti-East","Ekiti-West","Emure Ise Orun","Ekiti South-West","Ikare","Irepodun","Ijero","Ido Osi","Oye","Ikole","Moba","Gbonyin","Efon","Ise Orun","Ilejemeje"]
        }
    },
    {
        state:{
        name: "Enugu",
        lga: ["Enugu South","Igbo-Eze South","Enugu North","Nkanu","Udi Agwu","Oji-River","Ezeagu","IgboEze North","Isi-Uzo","Nsukka","Igbo-Ekiti","Uzo-Uwani","Enugu East","Aninri","Nkanu East","Udenu"]
    }
    },
    {
        state:{
        name: "Gombe",
        lga: ["Akko","Balanga","Billiri","Dukku","Kaltungo","Kwami","Shomgom","Funakaye","Gombe","Nafada Bajoga","Yamaltu Delta"]
        }
    },
    {
        state:{
        name: "Imo",
        lga: ["Aboh-Mbaise","Ahiazu-Mbaise","Ehime-Mbano","Ezinihitte","Ideato North","Ideato South","Ihitte Uboma","Ikeduru","Isiala Mbano","Isu","Mbaitoli","Mbaitoli","Ngor-Okpala","Njaba","Nwangele","Nkwerre","Obowo","Oguta","Ohaji Egbema","Okigwe","Orlu","Orsu","Oru East","Oru West","Owerri-Municipal","Owerri North","Owerri West"]
        }
    },
    {
        state: {
        name:"Jigawa",
        lga: ["Auyo","Babura","Birni Kudu","Biriniwa","Buji","Dutse","Gagarawa","Garki","Gumel","Guri","Gwaram","Gwiwa","Hadejia","Jahun","Kafin Hausa","Kaugama Kazaure","Kiri Kasamma","Kiyawa","Maigatari","Malam Madori","Miga","Ringim","Roni","Sule-Tankarkar","Taura","Yankwashi"]
        }
    },
    {
        state: {
        name:"Kaduna",
        lga: ["Birni-Gwari","Chikun","Giwa","Igabi","Ikara","jaba","Jema'a","Kachia","Kaduna North","Kaduna South","Kagarko","Kajuru","Kaura","Kauru","Kubau","Kudan","Lere","Makarfi","Sabon-Gari","Sanga","Soba","Zango-Kataf","Zaria"]
        }
    },
    {
        state: {
        name:"Kano",
        lga: ["Ajingi","Albasu","Bagwai","Bebeji","Bichi","Bunkure","Dala","Dambatta","Dawakin Kudu","Dawakin Tofa","Doguwa","Fagge","Gabasawa","Garko","Garum","Mallam","Gaya","Gezawa","Gwale","Gwarzo","Kabo","Kano Municipal","Karaye","Kibiya","Kiru","kumbotso","Kunchi","Kura","Madobi","Makoda","Minjibir","Nasarawa","Rano","Rimin Gado","Rogo","Shanono","Sumaila","Takali","Tarauni","Tofa","Tsanyawa","Tudun Wada","Ungogo","Warawa","Wudil"]
        }
    },
    {
        state: {
        name:"Katsina",
        lga: ["Bakori","Batagarawa","Batsari","Baure","Bindawa","Charanchi","Dandume","Danja","Dan Musa","Daura","Dutsi","Dutsin-Ma","Faskari","Funtua","Ingawa","Jibia","Kafur","Kaita","Kankara","Kankia","Katsina","Kurfi","Kusada","Mai'Adua","Malumfashi","Mani","Mashi","Matazuu","Musawa","Rimi","Sabuwa","Safana","Sandamu","Zango"]
        }
    },
    {
        state:{
        name: "Kebbi",
        lga: ["Aleiro","Arewa-Dandi","Argungu","Augie","Bagudo","Birnin Kebbi","Bunza","Dandi","Fakai","Gwandu","Jega","Kalgo","Koko Besse","Maiyama","Ngaski","Sakaba","Shanga","Suru","Wasagu Danko","Yauri","Zuru"]
        }
    },
    {
        state:{ 
        name:"Kogi",
        lga: ["Adavi","Ajaokuta","Ankpa","Bassa","Dekina","Ibaji","Idah","Igalamela-Odolu","Ijumu","Kabba\/Bunu","Kogi","Lokoja","Mopa-Muro","Ofu","Ogori Mangongo","Okehi","Okene","Olamabolo","Omala","Yagba East","Yagba West"]
        }
    },
    {
        state:{
        name: "Kwara",
        lga: ["Asa","Baruten","Edu","Ekiti","Ifelodun","Ilorin East","Ilorin West","Irepodun","Isin","Kaiama","Moro","Offa","Oke-Ero","Oyun","Pategi"]
        }
    },
    {
        state:{
        name: "Lagos",
        lga: ["Agege","Ajeromi-Ifelodun","Alimosho","Amuwo-Odofin","Apapa","Badagry","Epe","Eti-Osa","Ibeju\/Lekki","Ifako-Ijaye","Ikeja","Ikorodu","Kosofe","Lagos Island","Lagos Mainland","Mushin","Ojo","Oshodi-Isolo","Shomolu","Surulere"]
        }
    },
    {
        state:{
        name: "Nasarawa",
        lga: ["Akwanga","Awe","Doma","Karu","Keana","Keffi","Kokona","Lafia","Nasarawa","Nasarawa-Eggon","Obi","Toto","Wamba"]
        }
    },
    {
        state: {
        name:"Niger",
        lga: ["Agaie","Agwara","Bida","Borgu","Bosso","Chanchaga","Edati","Gbako","Gurara","Katcha","Kontagora","Lapai","Lavun","Magama","Mariga","Mashegu","Mokwa","Muya","Pailoro","Rafi","Rijau","Shiroro","Suleja","Tafa","Wushishi"]
        }
    },
    {
        state:{
        name:"Ogun",
        lga: ["Abeokuta North","Abeokuta South","Ado-Odo\/Ota","Egbado North","Egbado South","Ewekoro","Ifo","Ijebu East","Ijebu North","Ijebu North East","Ijebu Ode","Ikenne","Imeko-Afon","Ipokia","Obafemi-Owode","Ogun Waterside","Odeda","Odogbolu","Remo North","Shagamu"]
        }
    },
    {
        state:{
        name: "Ondo",
        lga: ["Akoko North East","Akoko North West","Akoko South Akure East","Akoko South West","Akure North","Akure South","Ese-Odo","Idanre","Ifedore","Ilaje","Ile-Oluji","Okeigbo","Irele","Odigbo","Okitipupa","Ondo East","Ondo West","Ose","Owo"]
        }
    },
    {
        state:{
        name:"Osun",
        lga: ["Aiyedade","Aiyedire","Atakumosa East","Atakumosa West","Boluwaduro","Boripe","Ede North","Ede South","Egbedore","Ejigbo","Ife Central","Ife East","Ife North","Ife South","Ifedayo","Ifelodun","Ila","Ilesha East","Ilesha West","Irepodun","Irewole","Isokan","Iwo","Obokun","Odo-Otin","Ola-Oluwa","Olorunda","Oriade","Orolu","Osogbo"]
        }
    },
    {
        state: {
        name:"Oyo",
        lga: ["Afijio","Akinyele","Atiba","Atigbo","Egbeda","Ibadan Central","Ibadan North","Ibadan North West","Ibadan South East","Ibadan South West","Ibarapa Central","Ibarapa East","Ibarapa North","Ido","Irepo","Iseyin","Itesiwaju","Iwajowa","Kajola","Lagelu Ogbomosho North","Ogbmosho South","Ogo Oluwa","Olorunsogo","Oluyole","Ona-Ara","Orelope","Ori Ire","Oyo East","Oyo West","Saki East","Saki West","Surulere"]
        }
    },
    {
        state:{
        name: "Plateau",
        lga: ["Barikin Ladi","Bassa","Bokkos","Jos East","Jos North","Jos South","Kanam","Kanke","Langtang North","Langtang South","Mangu","Mikang","Pankshin","Qua'an Pan","Riyom","Shendam","Wase"]
        }
    },
    {
        state: {
        name:"Rivers",
        lga: ["Abua Odual","Ahoada East","Ahoada West","Akuku Toru","Andoni","Asari-Toru","Bonny","Degema","Emohua","Eleme","Etche","Gokana","Ikwerre","Khana","Obia Akpor","Ogba Egbema Ndoni","Ogu Bolo","Okrika","Omumma","Opobo Nkoro","Oyigbo","Port-Harcourt","Tai"]
        }
    },
    {
        state: {
        name:"Sokoto",
        lga: ["Binji","Bodinga","Dange-shnsi","Gada","Goronyo","Gudu","Gawabawa","Illela","Isa","Kware","kebbe","Rabah","Sabon birni","Shagari","Silame","Sokoto North","Sokoto South","Tambuwal","Tqngaza","Tureta","Wamako","Wurno","Yabo"]
        }
    },
    {
        state: {
        name:"Taraba",
        lga: ["Ardo-kola","Bali","Donga","Gashaka","Cassol","Ibi","Jalingo","Karin-Lamido","Kurmi","Lau","Sardauna","Takum","Ussa","Wukari","Yorro","Zing"]
        }
    },
    {
        state: {
        name:"Yobe",
        lga: ["Bade","Bursari","Damaturu","Fika","Fune","Geidam","Gujba","Gulani","Jakusko","Karasuwa","Karawa","Machina","Nangere","Nguru Potiskum","Tarmua","Yunusari","Yusufari"]
        }
    },
    {
        state: {
        name:"Zamfara",
        lga: ["Anka","Bakura","Birnin Magaji","Bukkuyum","Bungudu","Gummi","Gusau","Kaura","Namoda","Maradun","Maru","Shinkafi","Talata Mafara","Tsafe","Zurmi"]
        }
    },
    {
        state:{
        name:"Abuja",
        lga: ["Gwagwalada","Kuje","Abaji","Abuja Municipal","Bwari","Kwali"]
        }
    },
]

// get the state tag
var state = document.querySelector('select[name="state"]');
// loop through the data array
for(var i = 0; i< data.length; i++){
    //   create an option for the state tag
    var opt = document.createElement("option");
    //   set the value and innerHtml of the created option to that of the state name
    opt.value = data[i].state.name;
    opt.innerHTML = data[i].state.name;
    //   append the created option to the state tag
    state.appendChild(opt)
}

// on the document load
document.addEventListener('DOMContentLoaded',function() {
    state.onchange=changeEventHandler;
},false);

function changeEventHandler(event) {
// You can use “this” to refer to the selected element.
if(!event.target.value) {
    alert('Please Select One');
}
else{
//       get the local government tag
  var lga = document.querySelector('select[name="lga"]'); 
//       if theres a selected value for states
  if(event.target.value){
        // save the selected state index Local government array in a variable
        var lgaArray = data[state.selectedIndex - 1].state.lga
            //loop through the local government array
        for(x = 0; x< lgaArray.length; x++){
                //create the Local Government options
            var option = document.createElement("option");
                //set the value and innerHtml of the created option to that of the Local government name
              option.value = lgaArray[x];
              option.innerHTML = lgaArray[x];
                //append the options
            lga.appendChild(option)
            }
        
      }else{
        alert("Select a state")
      }
}
}


