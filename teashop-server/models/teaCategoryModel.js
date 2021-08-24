const {Sequelize, DataTypes} = require('sequelize');
const moment = require('moment');
const config = require('../config/config.js');
const sequelize = new Sequelize(config.mysqldb);

let teaCategoryModel = sequelize.define(
    'category',
    {
        name: {
            type: DataTypes.STRING,
            comment: '茶系名称'
        },
        isShow: {
            type: DataTypes.CHAR,
            comment: '是否显示'
        },
        sort: {
            type: DataTypes.INTEGER,
            comment: '排序',
            defaultValue: 1
        },
        create_time: {
            type: DataTypes.DATE,
            comment: '创建时间',
            defaultValue: new Date().setHours(new Date().getHours() + 8),
            get() {
                const rawValue = this.getDataValue('create_time');
                return rawValue ? moment(rawValue).utc().format('YYYY-MM-DD HH:mm:ss') : '';
            }
        },
        update_time: {
            type: DataTypes.DATE,
            comment: '更新时间',
            defaultValue: new Date().setHours(new Date().getHours() + 8),
            get() {
                const rawValue = this.getDataValue('update_time');
                return rawValue ? moment(rawValue).utc().format('YYYY-MM-DD HH:mm:ss') : '';
            }
        }
    },
    {
        timestamps: false,
        tableName: 'tea_tea_category'
    }
)


module.exports = teaCategoryModel;