import { ref } from '@nuxtjs/composition-api'

export default function usePromise(fn) {
    const loading = ref(false);
    const results = ref(null);
    const error = ref(null);

    const createPromise = async (...args) => {
        loading.value = true;
        results.value = null;
        error.value = null;

        try {
          results.value = (await fn(...args)).data;
        }catch (err) {
          error.value = err;
        }finally {
          loading.value = false;
        }
    }

    return {results, loading, error, createPromise}

}
