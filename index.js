/**
 *  Cash Register
 * 
 *  Return true if the passed string looks like a valid US phone number.
 * 
 */
function rounded(x){
  return Math.round(x*100)/100;
}
function convertToArray(list){
  return list.map(item => {
    let ref = [];
    for(let key in item){
      ref.push(key);
      ref.push(item[key]);
    }
    return ref;
  })
}
function checkCashRegister(price, cash, cid) {
  const orig = [...cid];
  const units = {
      'ONE HUNDRED' : 100, 
      'TWENTY' : 20, 
      'TEN' : 10, 
      'FIVE' : 5, 
      'ONE' : 1, 
      'QUARTER' : 0.25, 
      'DIME' : 0.10, 
      'NICKEL' : 0.05,
      'PENNY' : 0.01
      }
  // objectify cid
  
  let cidTotal = 0;
  cid = cid.reduce((ref, item) => {
    cidTotal += item[1]
    return {...ref, [item[0]]:item[1], TOTAL:rounded(ref['TOTAL'] + item[1])}
  }, {TOTAL:0});
  // console.log('TOTAL', cid.TOTAL)

  let change = cash - price;
  let ref = [];
  for(let unit in units){
    let piraso = change/units[unit];
    // console.log(unit, piraso)
    // console.log('natitira',unit,change);
    if(Math.floor(piraso) > 0){
      let magkano = {[unit]:0};
      // console.log('before', cid);
      for(let i = 1; i <= piraso; i++){

        if(cid[unit] >= units[unit]){
          cid[unit] = rounded(cid[unit] - units[unit]);
          // console.log('lintek',katumbas)
          magkano[unit] = rounded(magkano[unit] + units[unit]);
          // console.log('taena', rounded(change - units[unit]));
          change = rounded(change - units[unit]);
          // console.log('SUKLI', change);
          cid.TOTAL = rounded(cid.TOTAL - units[unit]);
        }
      }

      ref.push(magkano);
      // console.log('gamitin mo', unit, 'katumbas', katumbas, 'piraso', piraso)
    }
  }
  // console.log(cid);
  console.log('REMAINING CHANGE', change)
  console.log('REMAINING TOTAL', cid.TOTAL)
  // console.log(convertToArray(ref));
  if(change != 0){
    return {status:'INSUFFICIENT_FUNDS', change:[]}
  }else if(change == 0 && cid.TOTAL == 0){
    // console.log('ORIG',orig);
    return {status:'CLOSED', change:orig};
  }else{
    return {status: 'OPEN', change:convertToArray(ref)};
  }
}

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));