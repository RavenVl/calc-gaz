import { createSlice } from '@reduxjs/toolkit'


const ITEMS= [{"id": 1, "name": "Stag 4x", "price": 25500.0, "group_id": 1, "cil4": true, "cil6": false, "cil8": false}, {"id": 2, "name": "Lovato E-Go", "price": 35500.0, "group_id": 1, "cil4": true, "cil6": false, "cil8": false}, {"id": 3, "name": "Lovato Smart 4x", "price": 38000.0, "group_id": 1, "cil4": true, "cil6": false, "cil8": false}, {"id": 4, "name": "Lovato Smart 4xOBD", "price": 41000.0, "group_id": 1, "cil4": true, "cil6": false, "cil8": false}, {"id": 5, "name": "Lovato Easy Fast 6x", "price": 54000.0, "group_id": 1, "cil4": false, "cil6": true, "cil8": false}, {"id": 6, "name": "Lovato Easy Fast 8x", "price": 57000.0, "group_id": 1, "cil4": false, "cil6": false, "cil8": true}, {"id": 7, "name": "DGI 6x", "price": 40500.0, "group_id": 1, "cil4": false, "cil6": true, "cil8": false}, {"id": 8, "name": "DGI IQ 8x", "price": 46500.0, "group_id": 1, "cil4": false, "cil6": false, "cil8": true}, {"id": 9, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 35 \u043b \u0432\u043d\u0443\u0442\u0440 \u0433\u043e\u0440\u043b\u043e\u0432(580\u0445180) \u043f\u043b\u043e\u0441\u043a\u0438\u0439", "price": 4000.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 10, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 42\u043b \u0432 \u0432\u043d\u0443\u0442\u0440 \u0433\u043e\u0440\u043b\u043e\u0432 (600\u0445200)", "price": 4000.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 11, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 42\u043b \u0441 \u043d\u0430\u0440\u0443\u0436 \u0433\u043e\u0440\u043b\u043e\u0432 (600\u0445200)", "price": 4500.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 12, "name": "Emmer Paladio(\u0434\u043e 350 \u043b.\u0441.)", "price": 200.0, "group_id": 3, "cil4": true, "cil6": true, "cil8": true}, {"id": 13, "name": "KME Gold(\u0434\u043e 350 \u043b.\u0441)", "price": 2000.0, "group_id": 3, "cil4": true, "cil6": true, "cil8": true}, {"id": 14, "name": "Tomasetto (\u0434\u043e 350 \u043b.\u0441)", "price": 2000.0, "group_id": 3, "cil4": true, "cil6": true, "cil8": true}, {"id": 15, "name": "AEB 3x", "price": 1200.0, "group_id": 4, "cil4": false, "cil6": true, "cil8": false}, {"id": 16, "name": "Gemini 3x", "price": 1500.0, "group_id": 4, "cil4": false, "cil6": true, "cil8": false}, {"id": 17, "name": "Gemini 4x", "price": 3600.0, "group_id": 4, "cil4": true, "cil6": false, "cil8": false}, {"id": 18, "name": "OMVL 4x", "price": 1500.0, "group_id": 4, "cil4": true, "cil6": false, "cil8": false}, {"id": 19, "name": "Poletron 3x", "price": 3500.0, "group_id": 4, "cil4": false, "cil6": true, "cil8": false}, {"id": 20, "name": "Poletron 4x", "price": 4800.0, "group_id": 4, "cil4": true, "cil6": false, "cil8": false}, {"id": 21, "name": "\u0412\u0417\u0423 \u0432 \u043b\u044e\u043a", "price": 500.0, "group_id": 5, "cil4": true, "cil6": true, "cil8": true}, {"id": 22, "name": "\u04346", "price": 2000.0, "group_id": 6, "cil4": true, "cil6": true, "cil8": true}, {"id": 23, "name": "\u04348", "price": 2500.0, "group_id": 6, "cil4": true, "cil6": true, "cil8": true}, {"id": 24, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 54\u043b \u0441 \u0432\u043d\u0443\u0442\u0440 \u0433\u043e\u0440\u043b\u043e\u0432 (630\u0445220)", "price": 6000.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 25, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 54\u043b \u0441 \u043d\u0430\u0440\u0443\u0436 \u0433\u043e\u0440\u043b\u043e\u0432 (630\u0445220)", "price": 6100.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 26, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 54\u043b \u0441 \u0432\u043d\u0443\u0442\u0440 \u0433\u043e\u0440\u043b\u043e\u0432 (720\u0445180) \u043f\u043b\u043e\u0441\u043a\u0438\u0439", "price": 8500.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 27, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 61\u043b \u0441 \u0432\u043d\u0443\u0442\u0440 \u0433\u043e\u0440\u043b\u043e\u0432 (720\u0445200) \u043f\u043b\u043e\u0441\u043a\u0438\u0439", "price": 7800.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 28, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 63\u043b \u0441 \u0432\u043d\u0443\u0442\u0440 \u0433\u043e\u0440\u043b\u043e\u0432  (630*250)", "price": 7200.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 29, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 63\u043b \u0441 \u043d\u0430\u0440\u0443\u0436 \u0433\u043e\u0440\u043b\u043e\u0432 (630*250)", "price": 7300.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 30, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 73\u043b \u0441 \u0432\u043d\u0443\u0442\u0440 \u0433\u043e\u0440\u043b\u043e\u0432 (720*230)", "price": 8100.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 31, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 73\u043b \u0441 \u043d\u0430\u0440\u0443\u0436 \u0433\u043e\u0440\u043b\u043e\u0432 (720*230)", "price": 8200.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 32, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 80\u043b \u0441 \u043d\u0430\u0440\u0443\u0436 \u0433\u043e\u0440\u043b\u043e\u0432 (720*250)", "price": 8500.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 33, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 93\u043b \u0441 \u043d\u0430\u0440\u0443\u0436 \u0433\u043e\u0440\u043b\u043e\u0432 (720*270)", "price": 12500.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 34, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 98\u043b \u0441 \u043d\u0430\u0440\u0443\u0436 \u0433\u043e\u0440\u043b\u043e\u0432 (720*300)", "price": 10500.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 35, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 40\u043b \u0441 \u0432\u043d\u0443\u0442\u0440 \u0433\u043e\u0440\u043b\u043e\u0432 (580*200)", "price": 4500.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 36, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 48\u043b \u0441 \u0432\u043d\u0443\u0442\u0440 \u0433\u043e\u0440\u043b\u043e\u0432 (600*225)", "price": 5000.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 37, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 48\u043b \u0441 \u043d\u0430\u0440\u0443\u0436 \u0433\u043e\u0440\u043b\u043e\u0432 (600*225)", "price": 5100.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 38, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 50\u043b \u0441 \u043d\u0430\u0440 \u0433\u043e\u0440\u043b\u043e\u0432 (680*180)", "price": 10400.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 39, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 54\u043b \u0441 \u043d\u0430\u0440\u0443\u0436. \u0433\u043e\u0440\u043b\u043e\u0432 (720*180)", "price": 10700.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 40, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 54\u043b \u0441 \u0432\u043d\u0443\u0442\u0440 \u0433\u043e\u0440\u043b\u043e\u0432 (720*180)", "price": 10700.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 41, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 60\u043b \u0441 \u0432\u043d\u0443\u0442\u0440 \u0433\u043e\u0440\u043b\u043e\u0432 (600*270)", "price": 7100.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 42, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0442\u043e\u0440\u043e\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 63\u043b \u0441 \u0432\u043d\u0443\u0442\u0440 \u0433\u043e\u0440\u043b\u043e\u0432 (650*240)", "price": 7100.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 43, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0446\u0438\u043b\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0410\u0413-30\u043b (300\u0445490)", "price": 2500.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 44, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0446\u0438\u043b\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0410\u0413-35/40\u043b (241*997) \u0442\u043e\u043d\u043a\u0438\u0439", "price": 4000.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 45, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0446\u0438\u043b\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0410\u0413-40\u043b (300\u0445630)", "price": 2500.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 46, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0446\u0438\u043b\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0410\u0413-50\u043b (300\u0445789)", "price": 2500.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 47, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0446\u0438\u043b\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u041d\u0417\u0413\u0410 \u0410\u0413-50 (376*550) \u043f\u0443\u0437\u0430\u043d", "price": 4000.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 48, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0446\u0438\u043b\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0410\u0413-60\u043b (300\u0445945)", "price": 2800.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 49, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0446\u0438\u043b\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0410\u0413-65\u043b (300\u04451001)", "price": 2800.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 50, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0446\u0438\u043b\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0410\u0413-80\u043b (356\u0445946)", "price": 4400.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 51, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0446\u0438\u043b\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0410\u0413-90\u043b (356\u04451005)", "price": 4500.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 52, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0446\u0438\u043b\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0410\u0413-103\u043b (356\u04451142)", "price": 5000.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 53, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0446\u0438\u043b\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0410\u0413-103\u043b (356\u04451142) \u0431\u0435\u0437 \u0432/\u043a", "price": 5000.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 54, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0446\u0438\u043b\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0411\u0410\u0416-200 (500*1186)", "price": 8000.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 55, "name": "\u0411\u0430\u043b\u043b\u043e\u043d \u0446\u0438\u043b\u043b\u0438\u043d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 STENER 34\u043b ( 270*700 \u043c\u043c) c \u043b\u043e\u0436\u0435\u043c\u0435\u043d\u0442", "price": 5800.0, "group_id": 2, "cil4": true, "cil6": true, "cil8": true}, {"id": 56, "name": "\u0420\u0430\u043c\u043f\u0430 Gemini 4x - 2", "price": 7200.0, "group_id": 4, "cil4": false, "cil6": false, "cil8": true}, {"id": 57, "name": "\u0420\u0430\u043c\u043f\u0430 OMVL 4x - 2", "price": 3000.0, "group_id": 4, "cil4": false, "cil6": false, "cil8": true}, {"id": 58, "name": "\u0420\u0430\u043c\u043f\u0430 Poletron 4x - 2", "price": 9600.0, "group_id": 4, "cil4": false, "cil6": false, "cil8": true}]

// const ITEMS = JSON.parse(document.getElementById('items').textContent);
    let oborud=ITEMS.filter(item => item.group_id === 1 && item.cil4 === true)
    let balon = ITEMS.filter(item => item.group_id === 2);
    let reductor = ITEMS.filter(item => item.group_id === 3);
    reductor.unshift({group_id: 3, price: 0, id: 0, name: '------------', cil4: true, cil6: true, cil8: true})
    let rampa = ITEMS.filter(item => item.group_id === 4 && item.cil4 === true);
    rampa.unshift({group_id: 4, price: 0, id: 0, name: '------------', cil4: true, cil6: true, cil8: true})
    let plastic = ITEMS.filter(item => item.group_id === 6);
    plastic.unshift({group_id: 6, price: 0, id: 0, name: '------------', cil4: true, cil6: true, cil8: true});


const calcItog=(state)=>{
    let sum = 0;
        for (let val of Object.values(state.state_init)) {
            sum += val;}
    return sum
}

export const calcSlice = createSlice({
  name: 'calc',
  initialState: {
      items:{
            oborud: oborud,
            balon: balon,
            reductor: reductor,
            rampa:rampa,
            plastic:plastic,
            cil: "4"
      },
      state_init : {
        oborud: oborud[0].price,
        balon: balon[0].price,
        reductor: reductor[0].price,
        ramp: rampa[0].price,
        vzu: 0,
        plastic: plastic[0].price,

      },
      sum: oborud[0].price + balon[0].price + reductor[0].price + rampa[0].price + plastic[0].price,

  },
  reducers: {
    changeCena:(state, action)=> {
        state.state_init[action.payload.name] = parseInt(action.payload.value)
        state.sum = calcItog(state)

    },
    changeCilinder: (state, action) => {
        state.items.cil = action.payload
        if(state.items.cil === '4'){
            state.items.oborud = ITEMS.filter(item => item.group_id === 1 && item.cil4 === true);
            state.state_init.oborud = state.items.oborud[0].price
            state.sum = calcItog(state)
            let rampa1 = ITEMS.filter(item => item.group_id === 4 && item.cil4 === true);
            rampa1.unshift({group_id: 4, price: 0, id: 0, name: '------------', cil4: true, cil6: true, cil8: true});
            state.items.rampa = rampa1;
        }
        else if (state.items.cil === '6'){
            state.items.oborud = ITEMS.filter(item => item.group_id === 1 && item.cil6 === true);
            state.state_init.oborud = state.items.oborud[0].price
            state.sum = calcItog(state)
             let rampa1 = ITEMS.filter(item => item.group_id === 4 && item.cil6 === true);
            rampa1.unshift({group_id: 4, price: 0, id: 0, name: '------------', cil4: true, cil6: true, cil8: true});
            state.items.rampa = rampa1;
        }
        else if (state.items.cil === '8'){
            state.items.oborud = ITEMS.filter(item => item.group_id === 1 && item.cil8 === true);
            state.state_init.oborud = state.items.oborud[0].price
            state.sum = calcItog(state)
            let rampa1 = ITEMS.filter(item => item.group_id === 4 && item.cil8 === true);
            rampa1.unshift({group_id: 4, price: 0, id: 0, name: '------------', cil4: true, cil6: true, cil8: true});
            state.items.rampa = rampa1;
        }
    },

  },
})

export const { changeCena, changeCilinder } = calcSlice.actions

export default calcSlice.reducer