import {
  fetchAllFields,
  fetchFieldById,
  addField,
  editField,
  removeField,
} from "../services/fieldServices.js";

export const getFields = async (req, res) => {
  try {
    const fields = await fetchAllFields();
    res.status(200).json({
      status: 200,
      message: "Fields retrieved successfully",
      data: fields,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
      data: null,
    });
  }
};

export const getField = async (req, res) => {
  try {
    const field = await fetchFieldById(req.params.id);
    res.status(200).json({
      status: 200,
      message: "Field retrieved successfully",
      data: field,
    });
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: error.message,
      data: null,
    });
  }
};

export const createField = async (req, res) => {
  try {
    const newField = await addField(req.body);
    res.status(201).json({
      status: 201,
      message: "Field created successfully",
      data: newField,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
      data: null,
    });
  }
};

export const updateField = async (req, res) => {
  try {
    const updatedField = await editField(req.params.id, req.body);
    res.status(200).json({
      status: 200,
      message: "Field updated successfully",
      data: updatedField,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
      data: null,
    });
  }
};

export const deleteField = async (req, res) => {
  try {
    const result = await removeField(req.params.id);
    res.status(200).json({
      status: 200,
      message: "Field deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: error.message,
      data: null,
    });
  }
};
