using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiAjax1.Models
{
    [Route("api/[controller]")]
    [ApiController]
    public class MathController : ControllerBase
    {
        [HttpGet]
        public CalcResult Calculate(int x, int y)
        {
            return new CalcResult()
            {
                Sum = x + y,
                Difference = x - y,
                Product = x * y,
                Quotient = x / y
            };

        }
    }
}
