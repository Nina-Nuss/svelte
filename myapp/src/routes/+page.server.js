
import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data, error } = await supabase.from("test").select();

    console.log("Supabase data:", data);
    console.log("Supabase error:", error);

    return {
        items: data ?? [],
    };
}
