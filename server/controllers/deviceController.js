const uuid = require("uuid");
const path = require("path");
//импортировали еще DeviceInfo
const { Device, DeviceInfo } = require("../models/models");
const ApiError = require("../error/ApiError");
class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      //если передали info в теле запроса
      if (info) {
        //когда данные передаем через formdate они приходят в виде строки
        //а нужны объекты, используем JSON.parse
        info = JSON.parse(info);
        //проходимся по каждому элементу и создаем DeviceInfo
        info.forEach((i) =>
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          })
        );
      }
      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });
      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    //реализация фильтров
    let { brandId, typeId } = req.query;
    let devices;
    //если не указаны бренд и тип вернем все
    if (!brandId && !typeId) {
      devices = await Device.findAll();
    }
    // если есть бренд, делаем фильтрацию по бренду
    // where:{brandId} - указание поля, где нужно искать
    if (brandId && !typeId) {
      devices = await Device.findAll({ where: { brandId } });
    }
    if (!brandId && typeId) {
      devices = await Device.findAll({ where: { typeId } });
    }
    if (brandId && typeId) {
      devices = await Device.findAll({ where: { typeId, brandId } });
    }
    //возвращаем массив devices
    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params;
    //находим в базе по id и возвращаем информацию об устройстве
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json(device);
  }
}

module.exports = new DeviceController();