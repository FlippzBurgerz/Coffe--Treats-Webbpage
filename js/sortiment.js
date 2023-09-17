//importerar data från async funktioner från fetch.js
import { getData, getData2 } from "./fetch.js";

//async funktion som tar in datan från fetch.js
async function foodData() {
    let dataValues = await getData();
    let dataValues2 = await getData2();
    const sandList = dataValues2.meals;
    const cakeList = dataValues.meals;

    const foodList = sandList.concat(cakeList);
    buildTable(foodList)
//funktion för att bygga element som kommer inehålla ingredienser som finns i rätterna
    function buildTable(data) {
        //plockar ut de rätter jag vill ha från listorna
        let d1 = data[0];
        const lasag = [];        
        let ingArea1 = document.getElementById('table1');
        let ingList1 = document.createElement('div');
        ingArea1.append(ingList1);
        //for loop för att få fram ingredienser som har mått, dvs ingredienser som finns i rätten
        for (let i = 1; i <= 20; i++) {
            if (d1[`strIngredient${i}`]) {
              lasag.push(
                `${d1[`strIngredient${i}`]}`
              );
            } else {
              break;
            }
          }
          ingList1.innerHTML=
          `
          <div>
              ${lasag.map(ing => `<li>${ing}</li>`).join('')}
          </div>
          `

          let d2 = data[3];
        const panCake = [];        
        let ingArea2 = document.getElementById('table2');
        let ingList2 = document.createElement('div');
        ingArea2.append(ingList2);
        for (let i = 1; i <= 20; i++) {
            if (d2[`strIngredient${i}`]) {
              panCake.push(
                `${d2[`strIngredient${i}`]}`
              );
            } else {
              break;
            }
          }
          ingList2.innerHTML=
          `
          <div>
              ${panCake.map(ing => `<li>${ing}</li>`).join('')}
          </div>
          `

          let d3 = data[5];
          const carrotCake = [];        
          let ingArea3 = document.getElementById('table3');
          let ingList3 = document.createElement('div');
          ingArea3.append(ingList3);
          for (let i = 1; i <= 20; i++) {
              if (d3[`strIngredient${i}`]) {
                carrotCake.push(
                  `${d3[`strIngredient${i}`]}`
                );
              } else {
                break;
              }
            }
            ingList3.innerHTML=
            `
            <div>
                ${carrotCake.map(ing => `<li>${ing}</li>`).join('')}
            </div>
            `
            
            let d4 = data[13];
            const cheeseCake = [];        
            let ingArea4 = document.getElementById('table4');
            let ingList4 = document.createElement('div');
            ingArea4.append(ingList4);
            for (let i = 1; i <= 20; i++) {
                if (d4[`strIngredient${i}`]) {
                  cheeseCake.push(
                    `${d4[`strIngredient${i}`]}`
                  );
                } else {
                  break;
                }
              }
              ingList4.innerHTML=
              `
              <div>
                  ${cheeseCake.map(ing => `<li>${ing}</li>`).join('')}
              </div>
              `

              let d5 = data[18];
              const peanutCheese = [];        
              let ingArea5 = document.getElementById('table5');
              let ingList5 = document.createElement('div');
              ingArea5.append(ingList5);
              for (let i = 1; i <= 20; i++) {
                  if (d5[`strIngredient${i}`]) {
                    peanutCheese.push(
                      `${d5[`strIngredient${i}`]}`
                    );
                  } else {
                    break;
                  }
                }
                ingList5.innerHTML=
                `
                <div>
                    ${peanutCheese.map(ing => `<li>${ing}</li>`).join('')}
                </div>
                `
    }
}
foodData()
