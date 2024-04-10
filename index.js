function get_Fields() {
    return {
        Name: document.getElementById("Name"),
        Race: document.getElementById("Race"),
        Class: document.getElementById("Class"),
        LVL: document.getElementById("LVL"),
        Experience: document.getElementById("Experience"),
        Sex: document.getElementById("Sex"),
        Speed: document.getElementById("Speed"),
        Initiative: document.getElementById("Initiative"),
        HP: document.getElementById("HP"),
        HPMax: document.getElementById("HPMax"),
        Armor: document.getElementById("Armor"),
        HPREG: document.getElementById("HPREG"),
        MANA: document.getElementById("MANA"),
        MANAMax: document.getElementById("MANAMax"),
        SPower: document.getElementById("SPower"),
        MRESIST: document.getElementById("MRESIST"),
        MANAReg: document.getElementById("MANAReg"),
        Weapon1: document.getElementById("Weapon1"),
        Weapon2: document.getElementById("Weapon2"),
        Armor: document.getElementById("Armor"),
        Helm: document.getElementById("Helm"),
        Shield: document.getElementById("Shield"),
        Other1: document.getElementById("Other1"),
        Other2: document.getElementById("Other2"),
        Other3: document.getElementById("Other3"),
        Spell1: document.getElementById("1"),
        Spell2: document.getElementById("2"),
        Spell3: document.getElementById("3"),
        Spell4: document.getElementById("4"),
        Spell5: document.getElementById("5"),
        Spell6: document.getElementById("6"),
        Spell7: document.getElementById("7"),
        Spell8: document.getElementById("8"),
        radstrD4: document.getElementById("D4str"),
        radstrD6: document.getElementById("D6str"),
        radstrD8: document.getElementById("D8str"),
        radstrD10: document.getElementById("D10str"),
        raddexD4: document.getElementById("D4dex"),
        raddexD6: document.getElementById("D6dex"),
        raddexD8: document.getElementById("D8dex"),
        raddexD10: document.getElementById("D10dex"),
        radintD4: document.getElementById("D4int"),
        radintD6: document.getElementById("D6int"),
        radintD8: document.getElementById("D8int"),
        radintD10: document.getElementById("D10int"),
        radwisD4: document.getElementById("D4wis"),
        radwisD6: document.getElementById("D6wis"),
        radwisD8: document.getElementById("D8wis"),
        radwisD10: document.getElementById("D10wis"),
        radLVLstr1: document.getElementById("lvUstrLvl+1"),
        radLVLstr2: document.getElementById("lvUstrLvl+2"),
        radLVLstr3: document.getElementById("lvUstrLvl+3"),
        radLVLdex1: document.getElementById("lvUdexLvl+1"),
        radLVLdex2: document.getElementById("lvUdexLvl+2"),
        radLVLdex3: document.getElementById("lvUdexLvl+3"),
        radLVLint1: document.getElementById("lvUintLvl+1"),
        radLVLint2: document.getElementById("lvUintLvl+2"),
        radLVLint3: document.getElementById("lvUintLvl+3"),
        radLVLwis1: document.getElementById("lvUwisLvl+1"),
        radLVLwis2: document.getElementById("lvUwisLvl+2"),
        radLVLwis3: document.getElementById("lvUwisLvl+3"),
    }   
}



function write_to_file(data) {
    
    const data_to_write = {
        Name: data.Name.value,
        Race: data.Race.value,
        Class: data.Class.value,
        LVL: data.LVL.value,
        Experience: data.Experience.value,
        Sex: data.Sex.value,
        Speed: data.Speed.value,
        Initiative: data.Initiative.value,
        HP: data.HP.value,
        HPMax: data.HPMax.value,
        Armor: data.Armor.value,
        HPREG: data.HPREG.value,
        MANA: data.MANA.value,
        MANAMax: data.MANAMax.value,
        SPower: data.SPower.value,
        MRESIST: data.MRESIST.value,
        MANAReg: data.MANAReg.value,
        Weapon1: data.Weapon1.value,
        Weapon2: data.Weapon2.value,
        Armor: data.Armor.value,
        Helm: data.Helm.value,
        Shield: data.Shield.value,
        Other1: data.Other1.value,
        Other2: data.Other2.value,
        Other3: data.Other3.value,
        Spell1: data.Spell1.value,
        Spell2: data.Spell2.value,
        Spell3: data.Spell3.value,
        Spell4: data.Spell4.value,
        Spell5: data.Spell5.value,
        Spell6: data.Spell6.value,
        Spell7: data.Spell7.value,
        Spell8: data.Spell8.value,
        radstrD4: data.radstrD4.value,
        radstrD6: data.radstrD6.value,
        radstrD8: data.radstrD8.value,
        radstrD10: data.radstrD10.value,
        raddexD4: data.raddexD4.value,
        raddexD6: data.raddexD6.value,
        raddexD8: data.raddexD8.value,
        raddexD10: data.raddexD10.value,
        radintD4: data.radintD4.value,
        radintD6: data.radintD6.value,
        radintD8: data.radintD8.value,
        radintD10: data.radintD10.value,
        radwisD4: data.radwisD4.value,
        radwisD6: data.radwisD6.value,
        radwisD8: data.radwisD8.value,
        radwisD10: data.radwisD10.value,
        radLVLstr1: data.radLVLstr1.value,
        radLVLstr2: data.radLVLstr2.value,
        radLVLstr3: data.radLVLstr3.value,
        radLVLdex1: data.radLVLdex1.value,
        radLVLdex2: data.radLVLdex2.value,
        radLVLdex3: data.radLVLdex3.value,
        radLVLint1: data.radLVLint1.value,
        radLVLint2: data.radLVLint2.value,
        radLVLint3: data.radLVLint3.value,
        radLVLwis1: data.radLVLwis1.value,
        radLVLwis2: data.radLVLwis2.value,
        radLVLwis3: data.radLVLwis3.value
    }

const blob = new Blob([JSON.stringify(data_to_write)], { type: 'text/plain;charset=utf-8' });
saveAs(blob, 'newJson.json');
}

fields = get_Fields()
function read_from_file(data, json) {
    data.Name.value = json.Name
    data.Race.value = json.Race
    data.Class.value = json.Class
    data.LVL.value = json.LVL
    data.Experience.value = json.Experience
    data.Sex.value = json.Sex
    data.Speed.value = json.Speed
    data.Initiative.value = json.Initiative
    data.HP.value = json.HP
    data.HPMax.value = json.HPMax
    data.Armor.value = json.Armor
    data.HPREG.value = json.HPREG
    data.MANA.value = json.MANA
    data.MANAMax.value = json.MANAMax
    data.SPower.value = json.SPower
    data.MRESIST.value = json.MRESIST
    data.MANAReg.value = json.MANAReg
    data.Weapon1.value = json.Weapon1
    data.Weapon2.value = json.Weapon2
    data.Armor.value = json.Armor
    data.Helm.value = json.Helm
    data.Shield.value = json.Shield
    data.Other1.value = json.Other1
    data.Other2.value = json.Other2
    data.Other3.value = json.Other3
    data.Spell1.value = json.Spell1
    data.Spell2.value = json.Spell2
    data.Spell3.value = json.Spell3
    data.Spell4.value = json.Spell4
    data.Spell5.value = json.Spell5
    data.Spell6.value = json.Spell6
    data.Spell7.value = json.Spell7
    data.Spell8.value = json.Spell8
    data.radstrD4.value = json.radstrD4
    data.radstrD6.value = json.radstrD6
    data.radstrD8.value = json.radstrD6
    data.radstrD10.value = json.radstrD10
    data.raddexD4.value = json.raddexD4
    data.raddexD6.value = json.raddexD6
    data.raddexD8.value = json.raddexD8
    data.raddexD10.value = json.raddexD10
    data.radintD4.value = json.radintD4
    data.radintD6.value = json.radintD6
    data.radintD8.value = json.radintD8
    data.radintD10.value = json.radintD10
    data.radwisD4.value = json.radwisD4
    data.radwisD6.value = json.radwisD6
    data.radwisD8.value = json.radwisD8
    data.radwisD10.value = json.radwisD10
    data.radLVLstr1.value = json.radLVLstr1
    data.radLVLstr2.value = json.radLVLstr2
    data.radLVLstr3.value = json.radLVLstr3
    data.radLVLdex1.value = json.radLVLdex1
    data.radLVLdex2.value = json.radLVLdex2
    data.radLVLdex3.value = json.radLVLdex3
    data.radLVLint1.value = json.radLVLint1
    data.radLVLint2.value = json.radLVLint2
    data.radLVLint3.value = json.radLVLint3
    data.radLVLwis1.value = json.radLVLwis1
    data.radLVLwis2.value = json.radLVLwis2
    data.radLVLwis3.value = json.radLVLwis3
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