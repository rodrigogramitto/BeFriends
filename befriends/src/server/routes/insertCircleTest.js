import Model from '../../db/models/index.js';


async function abc () {
  const blah = await Model.Messages.findAll({
    where: {'circle_chat_id': 1}
  })
  return blah;
}

console.log(abc());