const Command = {
  sayHi: ({ name }) => {
    console.log(`Hi, ${name}`);
  },

  execute: (commandName, props) => {
    if (!Command[commandName]) {
      throw new Error('The command does not exist');
    }

    Command[commandName](props);
  },
};

const user = {
  name: 'Tom',
};

Command.execute('sayHi', user); // Hi, Tom

Command.execute('sayByeBye', user); // Error: The command does not exist
