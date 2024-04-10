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
        Other3: document.getElementById("Other3")
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
        Other3: data.Other3.value
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
    data.ArmorEquipment.value = json.ArmorEquipment
    data.Helm.value = json.Helm
    data.Shield.value = json.Shield
    data.Other1.value = json.Other1
    
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