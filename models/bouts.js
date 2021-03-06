module.exports = function(sequelize, DataTypes) {

  var Bouts = sequelize.define("bouts", {

    bout_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    team1_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teams',
        key: 'team_id'
      },
      allowNull: false,
    },
    team2_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teams',
        key: 'team_id'
      },
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,     
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  });

  return Bouts;
};