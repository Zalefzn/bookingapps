import Fields from "../table/fields.js";

export const getAllFields = async () => {
  return await Fields.findAll();
};

export const getFieldById = async (id) => {
  return await Fields.findByPk(id);
};

export const createField = async (data) => {
  return await Fields.create(data);
};

export const updateField = async (id, data) => {
  return await Fields.update(data, { where: { id } });
};

export const deleteField = async (id) => {
  return await Fields.destroy({ where: { id } });
};
