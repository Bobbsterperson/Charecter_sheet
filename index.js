function char_data() {
    

const Name = document.getElementById("Name");
console.log(Name);

const Race = document.getElementById("Race");
console.log(Race);

const Class = document.getElementById("Class");
console.log(Class);

const LVL = document.getElementById("LVL");
console.log(LVL);

const Experience = document.getElementById("Experience");
console.log(Experience);

const Sex = document.getElementById("Sex");
console.log(Sex);

const Speed = document.getElementById("Speed");
console.log(Speed);

const Initiative = document.getElementById("Initiative");
console.log(Initiative);

const HP = document.getElementById("HP:");
console.log(HP);

const HPMax = document.getElementById("HP:");
console.log(HPMax);

const Armor = document.getElementById("ARMOR:");
console.log(Armor);

const HPReg = document.getElementById("HP.REG:");
console.log(HPReg);

const MANA = document.getElementById("MANA:");
console.log(MANA);

const MANAMax = document.getElementById("MANA:");
console.log(MANAMax);

const SPower = document.getElementById("S.POWER:");
console.log(SPower);

const MRESIST = document.getElementById("M.RESIST:");
console.log(MRESIST);

const MANAReg = document.getElementById("MANA REG:");
console.log(MANAReg);

const Weapon1 = document.getElementById("Weapon 1:");
console.log(Weapon1);

const Weapon2 = document.getElementById("Weapon 2:");
console.log(Weapon2);

const ArmorEquipment = document.getElementById("Armor:");
console.log(ArmorEquipment);

const Helm = document.getElementById("Helm:");
console.log(Helm);

const Shield = document.getElementById("Shield:");
console.log(Shield);

const Other1 = document.getElementById("Other:");
console.log(Other1);

const Other2 = document.getElementById("Other:");
console.log(Other2);

const Other3 = document.getElementById("Other:");
console.log(Other3);

const Spell1 = document.getElementById("1.:");
console.log(Spell1);

const Spell2 = document.getElementById("2.:");
console.log(Spell2);

const Spell3 = document.getElementById("3.:");
console.log(Spell3);

const Spell4 = document.getElementById("4.:");
console.log(Spell4);

const Spell5 = document.getElementById("5.:");
console.log(Spell5);

const Spell6 = document.getElementById("6.:");
console.log(Spell6);

const Spell7 = document.getElementById("7.:");
console.log(Spell7);

const Spell8 = document.getElementById("8.:");
console.log(Spell8);

const D4str = document.getElementById("D4str");
console.log(D4str);

const D6str = document.getElementById("D6str");
console.log(D6str);

const D8str = document.getElementById("D8str");
console.log(D8str);

const D10str = document.getElementById("D10str");
console.log(D10str);

const D4dex = document.getElementById("D4dex");
console.log(D4dex);

const D6dex = document.getElementById("D6dex");
console.log(D6dex);

const D8dex = document.getElementById("D8dex");
console.log(D8dex);

const D10dex = document.getElementById("D10dex");
console.log(D10dex);

const D4int = document.getElementById("D4int");
console.log(D4int);

const D6int = document.getElementById("D6int");
console.log(D6int);

const D8int = document.getElementById("D8int");
console.log(D8int);

const D10int = document.getElementById("D10int");
console.log(D10int);

const D4wis = document.getElementById("D4wis");
console.log(D4wis);

const D6wis = document.getElementById("D6wis");
console.log(D6wis);

const D8wis = document.getElementById("D8wis");
console.log(D8wis);

const D10wis = document.getElementById("D10wis");
console.log(D10wis);

const Lvl1 = document.getElementById("Lvl+1");
console.log(Lvl1);

const Lvl2 = document.getElementById("Lvl+2");
console.log(Lvl2);

const Lvl3 = document.getElementById("Lvl+3");
console.log(Lvl3);

const importButton = document.getElementById("import");
console.log(importButton);

const exportButton = document.getElementById("export");
console.log(exportButton);


const characterData = {
    Name: Name.value,
    Race: Race.value,
    Class: Class.value,
    LVL: LVL.value,
    Experience: Experience.value,
    Sex: Sex.value,
    Speed: Speed.value,
    Initiative: Initiative.value,
    HP: HP.value,
    HPMax: HPMax.value,
    Armor: Armor.value,
    HPReg: HPReg.value,
    MANA: MANA.value,
    MANAMax: MANAMax.value,
    SPower: SPower.value,
    MRESIST: MRESIST.value,
    MANAReg: MANAReg.value,
    Weapon1: Weapon1.value,
    Weapon2: Weapon2.value,
    ArmorEquipment: ArmorEquipment.value,
    Helm: Helm.value,
    Shield: Shield.value,
    Other1: Other1.value,
    Other2: Other2.value,
    Other3: Other3.value,
    Spell1: Spell1.value,
    Spell2: Spell2.value,
    Spell3: Spell3.value,
    Spell4: Spell4.value,
    Spell5: Spell5.value,
    Spell6: Spell6.value,
    Spell7: Spell7.value,
    Spell8: Spell8.value,
    D4str: D4str.value,
    D6str: D6str.value,
    D8str: D8str.value,
    D10str: D10str.value,
    D4dex: D4dex.value,
    D6dex: D6dex.value,
    D8dex: D8dex.value,
    D10dex: D10dex.value,
    D4int: D4int.value,
    D6int: D6int.value,
    D8int: D8int.value,
    D10int: D10int.value,
    D4wis: D4wis.value,
    D6wis: D6wis.value,
    D8wis: D8wis.value,
    D10wis: D10wis.value,
    Lvl1: Lvl1.value,
    Lvl2: Lvl2.value,
    Lvl3: Lvl3.value
  };
  
  const jsonData = JSON.stringify(characterData);
  
  const fs = require('fs');
  fs.writeFileSync('characterData.json', jsonData);
  
}
function get_Fields() {
    return {
        Name: document.getElementById("Name")
        // Race: document.getElementById("Race")
        // Class: document.getElementById("Class")
        // LVL: document.getElementById("LVL")
        // Experience: document.getElementById("Experience")
        // Sex: document.getElementById("Sex")
        // Speed: document.getElementById("Speed")
        // Initiative: document.getElementById("Initiative")
        // HP: document.getElementById("HP")
        // HPMax: document.getElementById("HPMax")
        // Armor: document.getElementById("Armor")
        // HPReg: document.getElementById("HPReg")
        // MANA: document.getElementById("MANA")
        // MANAMax: document.getElementById("MANAMax")
        // SPower: document.getElementById("SPower")
    }
}



function write_to_file(data) {
    
    const data_to_write = {
        Name: data.Name.value
        // Race: data.Race,
        // Class: data.Class,
        // LVL: data.LVL,
        // Experience: data.Experience,
        // Sex: data.Sex,
        // Speed: data.Speed,
        // Initiative: data.Initiative,
        // HP: data.HP,
        // HPMax: data.HPMax,
        // Armor: data.Armor,
        // HPReg: data.HPReg,
        // MANA: data.MANA,
        // MANAMax: data.MANAMax,
        // SPower: data.SPower,
        // MRESIST: data.MRESIST,
        // MANAReg: data.MANAReg,
        // Weapon1: data.Weapon1,
        // Weapon2: data.Weapon2,
        // ArmorEquipment: data.ArmorEquipment,
        // Helm: data.Helm,
        // Shield: data.Shield,
        // Other1: data.Other1,
    }
    const blob = new Blob([JSON.stringify(data_to_write)], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'newJson.json');
}
fields = get_Fields()
function read_from_file(data, json) {
    data.Name.value = json.Name
    
}

document.getElementById('export').addEventListener('click', function() {
    write_to_file(fields)
});
function read_file() {
    const [file] = document.getElementById('import').files;
    const reader = new FileReader();
   
    reader.addEventListener(
        'load',
        () => {
            
            const json = JSON.parse(reader.result);
            
            read_from_file(fields, json)
        },
        false
    );

    if (file) {
        reader.readAsText(file);
    }
}
read_file()