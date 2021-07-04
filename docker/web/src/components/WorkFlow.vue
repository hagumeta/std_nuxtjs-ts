<template>
  <v-stepper alt-labels>
    <v-stepper-header>
      <v-stepper-step
        step="3"
        complete
      >
        Ad type
      </v-stepper-step>
      <v-col>
        <div class="arrowRound"></div>
      </v-col>
      <v-stepper-items>
        <v-container>
          <v-row>
            <v-col>
              <v-card>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-icon>mdi-alert</v-icon>
                      <span>テスト</span>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-icon>mdi-alert</v-icon>
                      <span>テスト</span>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-icon>mdi-alert</v-icon>
                      <span>テスト</span>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-stepper-items>
      <v-col>
        <div class="arrowRound"></div>
      </v-col>
      <v-stepper-step
        step="8"
      >
        <v-container>
          <v-row>
            <v-col>
              <v-card>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-icon>mdi-alert</v-icon>
                      <span>テスト</span>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-icon>mdi-alert</v-icon>
                      <span>テスト</span>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-icon>mdi-alert</v-icon>
                      <span>テスト</span>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-stepper-step>
      <v-col>
        <div class="arrowRound"></div>
      </v-col>

      <v-stepper-step
        :rules="[() => false]"
        step="5"
      >
        Custom channels
        <small>Alert message</small>
      </v-stepper-step>

      <v-col>
        <div class="arrowRound"></div>
      </v-col>

      <v-stepper-step step="6">
        Get code
      </v-stepper-step>
    </v-stepper-header>
  </v-stepper>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style scoped>
.arrowRound {
  position: relative;
  display: block;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 4px;
  border-radius: 2px;
  background-color: #1E88E5;
}
.arrowRound::before {
  content: "";
  position: absolute;
  top: 6px;
  right: -2px;
  display: block;
  width: 20px;
  height: 4px;
  border-radius: 2px;
  transform: rotate(-45deg);
  background-color: #1E88E5;
}
.arrowRound::after {
  content: "";
  position: absolute;
  bottom: 6px;
  right: -2px;
  display: block;
  width: 20px;
  height: 4px;
  border-radius: 2px;
  transform: rotate(45deg);
  background-color: #1E88E5;
}
</style>
