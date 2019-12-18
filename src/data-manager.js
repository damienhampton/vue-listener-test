
function init(initialState){
  const state = initialState;
  let _interval = null;
  let _activeTriggers = [];
  const _allTriggers = []

  function updateState(){
    _activeTriggers.map(trigger => {
      state[trigger] = Date.now();
    })
  }

  return {
    defineTrigger(name, triggers){
      _allTriggers.push({ name, triggers });
    },
    updateTriggers(name){
      const componentTrigger = _allTriggers.find(c => c.name === name);

      clearInterval(_interval);
      _interval = null;

      if(!componentTrigger){
        return;
      }

      _activeTriggers = componentTrigger.triggers;


      if(!_activeTriggers.length){
        return;
      }

      updateState();
      _interval = setInterval(updateState.bind(this), 3000);
    },
    state
  }
}

export default init;