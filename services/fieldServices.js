import {
  getAllFields,
  getFieldById,
  createField,
  updateField,
  deleteField,
} from "../repository/fieldRepository.js";

export const fetchAllFields = async () => {
  return await getAllFields();
};

export const fetchFieldById = async (id) => {
  const field = await getFieldById(id);
  if (!field) throw new Error("Field not found");
  return field;
};

export const addField = async (data) => {
  if (!data.name || !data.type || !data.price_per_hour) {
    throw new Error("Missing required fields");
  }
  return await createField(data);
};

export const editField = async (id, data) => {
  const field = await getFieldById(id);
  if (!field) throw new Error("Field not found");

  await updateField(id, data);
  return await getFieldById(id);
};

export const removeField = async (id) => {
  const field = await getFieldById(id);
  if (!field) throw new Error("Field not found");

  await deleteField(id);
  return { message: "Field deleted successfully" };
};
