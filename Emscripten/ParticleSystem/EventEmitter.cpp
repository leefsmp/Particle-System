#include "EventEmitter.h"
#include <string>

///////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////
EventEmitter::EventEmitter () {

}

///////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////
void EventEmitter::on (std::string* pEventName, EventHandler* handler) {

  if (!_eventMap.count(*pEventName)) { //event key not found

    _eventMap[*pEventName] = new std::vector <EventHandler*> ();
  }

  _eventMap[*pEventName]->push_back(handler);
}

///////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////
void EventEmitter::emit (std::string eventName, std::string data) {

  if (_eventMap.count(eventName)) {

    std::vector<EventHandler*> * pEventStack = _eventMap[eventName];

    for(std::vector<EventHandler*>::iterator
      it = pEventStack->begin();
      it != pEventStack->end(); ++it) {

      (*it)->handleEvent(&data);
    }
  }
}


