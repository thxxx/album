import { supabase } from "./supabase";

const TABLE_NAME = "logs";

type LOG_TABLE_TYPE = {
  id?: string;
  log_id: string;
  user_id?: string;
  action: string;
  created_at?: Date;
};

export const getLog = async () => {
  const { data, error } = await supabase.from(TABLE_NAME).select("*");
  if (error) throw error;
  return data;
};

export const insertLog = async (inData: LOG_TABLE_TYPE) => {
  const { data, error } = await supabase.from(TABLE_NAME).insert(inData);
  if (error) throw error;
  return data;
};

export const upsertLog = async (inData: LOG_TABLE_TYPE) => {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .update(inData)
    .eq("log_id", inData.log_id)
    .eq("user_id", inData.user_id);
  if (error) throw error;
  return data;
};
