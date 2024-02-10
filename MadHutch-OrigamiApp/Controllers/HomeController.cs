using MadHutch_OrigamiApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace MadHutch_OrigamiApp.Controllers
{
    public class HomeController : Controller
    {

        // this class returns the view of the index page
        public IActionResult Index()
        {
            return View();
        }

        // this class returns the 2nd page created
        public IActionResult Page2()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
