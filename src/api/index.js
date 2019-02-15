const { stor, Board, List, Card } = require('./model')

export const board = {
  fetchAll: () => {
    // return request.get('/boards').then(({data}) => data)
    return new Promise((resolve, reject) => {
      const boardArrays = stor.getBoards()
      resolve({ list: boardArrays })
    })
  },
  fetch: (id) => {
    // return request.get(`/boards/${id}`).then(({ data }) => data)
    return new Promise((resolve, reject) => {
      const board = stor.getBoard(parseInt(id))
      resolve({ item: board })
    })
  },
  create: (title) => {
    // return request.post('/boards', { title }).then(({ data }) => data)
    return new Promise((resolve, reject) => {
      const board = new Board({ title })
      resolve({ item: stor.addBoard(board) })
    })
  },
  update: (id, data) => {
    // return request.put(`/boards/${id}`, data).then(({ data }) => data)
    return new Promise((resolve, reject) => {
      resolve({ item: stor.updateBoard(parseInt(id), data) })
    })
  },
  destroy: (id) => {
    // return request.delete(`/boards/${id}`)
    return new Promise((resolve, reject) => {
      stor.deleteBoard(parseInt(id))
      resolve()
    })
  }
}

export const list = {
  create: (data) => { // { title, pos, boardId }
    // return request.post(`/lists`, data).then(({ data }) => data)
    return new Promise((resolve, reject) => {
      const list = new List(data)
      resolve({ item: stor.addList(list) })
    })
  },
  update: (id, data) => { // id, { title, pos })
    // return request.put(`/lists/${id}`, data).then(({ data }) => data)
    return new Promise((resolve, reject) => {
      resolve({ item: stor.updateList(parseInt(id), data) })
    })
  },
  destroy: (id) => {
    // return request.delete(`/lists/${id}`).then(({ data }) => data)
    return new Promise((resolve, reject) => {
      stor.deleteList(parseInt(id))
      resolve()
    })
  }
}

export const card = {
  fetch: (id) => {
    // return request.get(`/cards/${id}`).then(({ data }) => data)
    return new Promise((resolve, reject) => {
      const card = stor.getCard(parseInt(id))
      resolve({ item: card })
    })
  },
  create: (data) => { // { title, pos, listId }
    // return request.post(`/cards`, {title, listId, pos}).then(({ data }) => data)
    return new Promise((resolve, reject) => {
      const card = new Card(data)
      resolve({ item: stor.addCard(card) })
    })
  },
  update: (id, data) => { // cardId, { id, title, description, pos, listId }
    // return request.put(`/cards/${id}`, data).then(({ data }) => data)
    return new Promise((resolve, reject) => {
      resolve({ item: stor.updateCard(parseInt(id), data) })
    })
  },
  destroy: (id) => {
    // return request.delete(`/cards/${id}`)
    return new Promise((resolve, reject) => {
      stor.deleteCard(parseInt(id))
      resolve()
    })
  }
}
