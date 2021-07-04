<template>
    <v-card>
        <v-container>
            <v-row>
                <v-col>
                    this is test.
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field
                        name="test"
                        label="何か入力してください"
                        id="id"
                        v-model="form.text"
                    >
                        <template #append-outer>
                            <v-btn block color="primary" dark @click="resetForm">reset</v-btn>
                        </template>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <div>{{ display }}</div>
                </v-col>
            </v-row>
            <div>{{hoge}}</div>
        </v-container>
    </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const hoge = ref(['hoge', 'figa']);
    const form = reactive({
      text: "",
    });
    const resetForm = () => {
      form.text = "";
    };
    const display = computed(() => {
        return form.text ? form.text + "computed_test" : "記載なし"
    })
    return {
        hoge,
        form,
        resetForm,
        display
    };
  },
});
</script>

<style scoped>

</style>