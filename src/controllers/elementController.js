const Element = require("@models/Element");

// Função para buscar todos os elementos
const getAllElements = async (req, res) => {
  try {
    const elements = await Element.find();
    res.json(elements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Função para criar um novo elemento
const createElement = async (req, res) => {
  const element = new Element({
    demoContent: req.body.demoContent,
  });

  try {
    const newElement = await element.save();
    res.status(201).json(newElement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllElements,
  createElement,
};
