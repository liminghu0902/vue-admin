export class Product {
    /**
     * @param {Number} id   
     * @param {String} name 
     * @param {String} batteryPack [电池]
     * @param {String} bodyColor   [外观]
     * @param {String} innerColor   [内饰]
     */
    constructor(name, batteryPack, bodyColor, innerColor) {
        this.name = name;
        this.batteryPack = batteryPack;
        this.bodyColor = bodyColor;
        this.innerColor = innerColor;
    }

    //获取所有产品配置信息
    static getProductConfigs() {
        
    }
}