module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define(
        'Messages',
        {
            message: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            freezeTableName: true,
            tableName: 'Messages',
        }
    );

    return Message;
};
