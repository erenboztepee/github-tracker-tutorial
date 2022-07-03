exports = async function greetNewContributors(request, response) {
  return response
    .setStatusCode(200)
    .setBody("Successfully received a GitHub webhook event")
}