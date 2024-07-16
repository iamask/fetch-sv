export default {
  async fetch(request) {
    const url = "https://pages.zxc.co.in";

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error fetching pages");
      }

      return response;
    } catch (error) {
      // Handle fetch error or non-OK response
      const errorBody = `<html><body><h1>Error</h1><p>${error.message}</p></body></html>`;
      const headers = new Headers({
        "content-type": "text/html;charset=UTF-8",
        "Access-Control-Allow-Origin": "https://r2.zxc.co.in", // Add CORS header to error response
      });

      return new Response(errorBody, { headers });
    }
  },
};
