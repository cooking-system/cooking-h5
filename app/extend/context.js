module.exports = {
  setSuccess(data) {
    this.body = {
      code: 200,
      data,
      error: null
    }
  }
}
