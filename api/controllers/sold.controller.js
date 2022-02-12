import { Sold } from "../models/index.js";

// Controller get all Solds
export const getAllSolds = async (req, res) => {
  try {
    const solds = await Sold.find();
    if (solds.length > 0) res.status(200).json(solds);
    else res.status(204).send();
  } catch (error) {}
};

// Controller get One Sold
export const getOneSold = async (req, res) => {
  const { id } = req.params;
  const sold = await Sold.findById(id);
  res.status(200).json(sold);
};

// Controller post Create One Sold
export const createSold = async (req, res) => {
  try {
    const sold = new Sold(req.body);
    const newSold = await sold.save();
    newSold && res.status(201).json(newSold);
  } catch (error) {
    res.status(500).json({ error });
  }
};

//controller delete Delete Sold
export const deleteSold = async (req, res) => {
  const { id } = req.params;
  const soldToDelete = await Sold.findById(id);

  try {
    if (!soldToDelete) res.status(204).send();
    else {
      const deletedSold = await Sold.deleteOne(soldToDelete);
      res.status(200).json(deletedSold);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

// ///////////////////////
// ///////////////////////
// ///////////////////////
// ///////////////////////
export const findSold = async (req, res, next) => {
  const { id } = req.params;
  const sold = await Sold.findById(id);
  try {
    if (sold) {
      req.data = {
        sold: sold,
      };
      next();
    } else res.status(204).send();
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const updateSold = async (req, res, next) => {
  const { sold } = req.data;
  const soldUpdate = req.body;

  try {
    Sold.updateOne(sold, soldUpdate, (err, data) => {
      if (!err) res.status(200).json(data);
      else res.status(500).send(err);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
