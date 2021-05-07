const { Todo } = require("../db/model");


const resolvers = {
  Query: {
    getTodos: async (parent, args) => {
      try {
        return await Todo.find();
      } catch (error) {
        throw new Error(error);
      }
    },
  },

  Mutation: {
    addTodo: async (parent, args) => {
      try {
        const { todoInput } = args;
        return await Todo.create(todoInput);
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteTodo: async (parent, args) => {
      try {
        const { todoId } = args;
        return await Todo.findByIdAndDelete(todoId);
      } catch (error) {
        throw new Error(error);
      }
    },
    updateTodo: async (parent, args) => {
      try {
        const { todoId, todoInput } = args;
        console.log(todoId, todoInput);
        return await Todo.findOneAndUpdate({_id: todoId}, todoInput, { new: true });
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = { resolvers };