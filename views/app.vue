<template>
  <div id="watch-example">
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent, DefineComponent } from 'vue'
import axios from 'axios';

export default defineComponent({
  title: "test-vue-3",
  components: {
  },

  data() {
    return {
      question: '' as string,
      answer: 'Questions usually contain a question mark. ;-)' as any
    }
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion: string | string[], oldQuestion: any) {

      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
    }
  },
  methods: {
    getAnswer(): void {
      this.answer = 'Thinking...';

      axios
          .get('https://yesno.wtf/api')
          .then(function (this: DefineComponent, response: any) {
            this.answer = response.data.answer
          }.bind(this))
          .catch(error => {
            this.answer = 'Error! Could not reach the API. ' + error
          })
    }
  }
});
</script>