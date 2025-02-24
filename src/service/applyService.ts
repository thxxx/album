import { supabase } from "./supabase";

const TABLE_NAME = "cover_pre_apply";

type APPLY_TABLE_TYPE = {
  id?: string;
  log_id: string;
  comment: string;
  mail: string;
  createdAt?: Date;
};

export const getUsers = async () => {
  const { data, error } = await supabase.from(TABLE_NAME).select("*");
  if (error) throw error;
  return data;
};

export const insertApplication = async (inData: APPLY_TABLE_TYPE) => {
  const { data, error } = await supabase.from(TABLE_NAME).insert(inData);
  if (error) throw error;
  return data;
};
