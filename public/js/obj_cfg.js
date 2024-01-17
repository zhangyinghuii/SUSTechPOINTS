// size is the dimension of the object in x/y/z axis, with unit meter.

class ObjectCategory
{

    obj_type_map = {
        Car_轿车:               {color: '#86af49',  size:[4.5, 1.8, 1.5], attr:["door open(门打开)", "trunk open(后备箱打开)"]},
        Pedestrian_行人:        {color: '#ff0000',  size:[0.4, 0.5, 1.7], attr:["umbrella(雨伞)", "sitting(坐)", "squating(蹲)", "bending over(弯腰)", "luggage(行李箱)"]},
        Van_面包车:             {color: '#00ff00',  size:[4.5, 1.8, 1.5], attr:["door open(门打开)", "trunk open(后备箱打开)"]},
        Bus_公交车:             {color: '#ffff00',  size:[13, 3, 3.5]},
        Truck_卡车:             {color: '#00ffff',  size:[10., 2.8, 3]},
        
        ScooterRider_骑电动车的人:  {color: '#ff8800',  size:[1.6, 0.6, 1.6], attr:["umbrella(雨伞)", "1 passenger(1个乘客)", "2 passengers(2个乘客)", "3 passengers(3个乘客)"]},
        Scooter_电动车:             {color: '#aaaa00',  size:[1.6, 0.6, 1.0]},

        
        BicycleRider_骑自行车的人:   {color: '#88ff00',  size:[1.6, 0.6, 1.7], attr:["umbrella(雨伞)", "1 passenger(1个乘客)", "2 passengers(2个乘客)", "3 passengers(3个乘客)"]},
        Bicycle_自行车:             {color: '#ff8800',  size:[1.6, 0.6, 1.2], attr:["laying down"]},


        Motorcycle_摩托车:          {color: '#aaaa00',  size:[1.6, 0.6, 1.2], attr:["umbrella(雨伞)"]},
        MotorcyleRider_骑摩托车的人: {color: '#ff8800',  size:[1.6, 0.6, 1.6], attr:["umbrella(雨伞)", "1 passenger(1个乘客)", "2 passengers(2个乘客)", "3 passengers(3个乘客)"]},

        

        PoliceCar_警车:         {color: '#86af49',  size:[4.5, 1.8, 1.5]},
        TourCar_观光车:         {color: '#86af49',  size:[4.4, 1.5, 2.2]},

        RoadWorker_工人:        {color: '#ff0000',  size:[0.4, 0.5, 1.7]},
        Child_小孩:             {color: '#ff0000',  size:[0.4, 0.5, 1.2]},

        //Crowd:          {color: '#ff0000',  size:[1.6, 0.6, 1.2]},

        BabyCart_婴儿车:       {color: '#ff0000',  size:[0.8, 0.5, 1.0]},
        Cart_手推车:           {color: '#ff0000',  size:[0.8, 0.5, 1.0]},
        Cone_雪糕筒:           {color: '#ff0000',  size:[0.3, 0.3, 0.6]},
        FireHydrant_消防栓:    {color: '#ff0000',  size:[0.4, 0.4, 0.6]},
        SaftyTriangle_安全三角:     {color: '#ff0000',  size:[0.3, 0.4, 0.4]},
        PlatformCart_平板车:        {color: '#ff0000',  size:[1.2, 0.8, 1.0]},
        ConstructionCart_建筑小车:  {color: '#ff0000',  size:[1.2, 0.8, 1.0]},
        RoadBarrel_安全桶:          {color: '#ff0000',  size:[0.5, 0.5, 0.6]},
        TrafficBarrier_交通护栏:    {color: '#ff0000',  size:[1.5, 0.3, 1.2]},
        LongVehicle_长尾拖车:       {color: '#ff0000',  size:[16, 3, 3]},

        
        BicycleGroup_电动车自行车堆: {color: '#ff0000',  size:[1.6, 0.6, 1.2]},
        

        ConcreteTruck_水泥车:       {color: '#00ffff',  size:[10., 2.8, 3]},
        Tram_电车:                  {color: '#00ffff',  size:[10., 2.8, 3]},
        Excavator_挖掘机:           {color: '#00ffff',  size:[6., 3, 3]},

        Animal_动物:                {color: '#00aaff',  size:[1.6, 0.6, 1.2]},

        TrashCan_垃圾桶:            {color: '#00aaff',  size:[0.6, 0.4, 1.0]},

        ForkLift_叉车:              {color: '#00aaff',  size:[5.0, 1.2, 2.0]},
        Trimotorcycle_电动三轮车:   {color: '#00aaff',  size:[2.6, 1.0, 1.6]},
        FreightTricycle_人力三轮车: {color: '#00aaff',  size:[2.6, 1.0, 1.6]},
        Crane_吊车:                 {color: '#00aaff',  size:[5.0, 1.2, 2.0]},
        RoadRoller_压路机:          {color: '#00aaff',  size:[2.7, 1.5, 2.0]},
        Bulldozer_推土机:           {color: '#00aaff',  size:[3.0, 2.0, 2.0]},

        DontCare:       {color: '#00ff88',  size:[4, 4, 3]},
        Misc:           {color: '#008888',  size:[4.5, 1.8, 1.5]},
        Unknown:        {color: '#008888',  size:[4.5, 1.8, 1.5]},
        Unknown1:       {color: '#008888',  size:[4.5, 1.8, 1.5]},
        Unknown2:       {color: '#008888',  size:[4.5, 1.8, 1.5]},
        Unknown3:       {color: '#008888',  size:[4.5, 1.8, 1.5]},
        Unknown4:       {color: '#008888',  size:[4.5, 1.8, 1.5]},
        Unknown5:       {color: '#008888',  size:[4.5, 1.8, 1.5]},
    };


    constructor(){
        
    }

    // popularCategories = ["Car", "Pedestrian", "Van", "Bus", "Truck", "Scooter", "ScooterRider", "Bicycle", "BicycleRider"];
    popularCategories = ["Car_轿车", "Pedestrian_行人", "Van_面包车", "Bus_公交车", "Truck_卡车", "Scooter_电动车", "ScooterRider_骑电动车的人", "Bicycle_自行车", "BicycleRider_骑自行车的人"];

    guess_obj_type_by_dimension(scale){

        var max_score = 0;
        var max_name = 0;
        this.popularCategories.forEach(i=>{
            var o = this.obj_type_map[i];
            var scorex = o.size[0]/scale.x;
            var scorey = o.size[1]/scale.y;
            var scorez = o.size[2]/scale.z;

            if (scorex>1) scorex = 1/scorex;
            if (scorey>1) scorey = 1/scorey;
            if (scorez>1) scorez = 1/scorez;

            if (scorex + scorey + scorez > max_score){
                max_score = scorex + scorey + scorez;
                max_name = i;
            }
        });

        console.log("guess type", max_name);
        return max_name;
    }

    global_color_idx = 0;
    get_color_by_id(id){
        let idx = parseInt(id);

        if (!idx)
        {
            idx = this.global_color_idx;
            this.global_color_idx += 1;
        }

        idx %= 33;
        idx = idx*19 % 33;

        return {
            x: idx*8/256.0,
            y: 1- idx*8/256.0,
            z: (idx<16)?(idx*2*8/256.0):((32-idx)*2*8/256.0),
        };
    }

    get_color_by_category(category){
        let target_color_hex = parseInt("0x"+this.get_obj_cfg_by_type(category).color.slice(1));
        
        return {
            x: (target_color_hex/256/256)/255.0,
            y: (target_color_hex/256 % 256)/255.0,
            z: (target_color_hex % 256)/255.0,
        };
    }

    get_obj_cfg_by_type(name){
        if (this.obj_type_map[name]){
            return this.obj_type_map[name];
        }
        else{
            return this.obj_type_map["Unknown"];
        }
    }

    // name_array = []

    // build_name_array(){
    //     for (var n in this.obj_type_map){
    //         name_array.push(n);
    //     }
    // }


    // get_next_obj_type_name(name){

    //     if (name_array.length == 0)    {
    //         build_name_array();
    //     }

    //     var idx = name_array.findIndex(function(n){return n==name;})
    //     idx+=1;
    //     idx %= name_array.length;

    //     return name_array[idx];
    // }

}


let globalObjectCategory = new ObjectCategory();

export {globalObjectCategory};