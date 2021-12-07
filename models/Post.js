const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {
    static upvote(body, models) {
        return models.Vote.create({
          user_id: body.user_id,
          post_id: body.post_id
        }).then(() => {
          return Post.findOne({
            where: {
              id: body.post_id
            },
            attributes: [
              'id',
              'post_body',
              'character1',
              'character2',
              'created_at',
              [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
            ],
            include: [
              {
                model: models.Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                  model: models.User,
                  attributes: ['username']
                }
              }
            ]
          });
        });
      }
}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        character1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        character2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "post",
    }
);

module.exports = Post;