import { ref } from "vue";
import http from "@/service/apiService";

export function useUsuario() {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const getUsuario = async () => {
    loading.value = true;
    try {
      const response = await http.get(`usuarios`);
      data.value = response.data;
      console.log('Requisição bem-sucedida:', response);
    } catch (err) {
      error.value = err;
      console.error('Erro na requisição:', err);
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    error,
    loading,
    getUsuario,
  };
}
