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
        </v-container>
    </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "@vue/composition-api";

export default defineComponent({
  setup() {
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
        form,
        resetForm,
        display
    };
  },
});
</script>

<style scoped>

</style>