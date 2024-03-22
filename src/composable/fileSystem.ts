// import _ from "lodash"
// const form = {
// tree:{
//     titleObject: [
//     {
//       name: "",
//       override: {},
//       childType: "heading",
//       headings: [
//         {
//           type: "heading",
//           name: "見出しA",
//           headings: [
//             {
//               type: "heading",
//               name: "見出しA-B",
//               childType: "evaluation",
//               endObject: [
//                 {
//                   type: "target",
//                   name: "",
//                   evaluationId: 1,
//                   conditions: [
//                     {
//                       conditionId: 1,
//                       valueType: "number",
//                       value: 10,
//                       categoryVariableId: null,
//                       unitId: 1,
//                     },
//                   ],
//                   items: [],
//                 },
//               ],
//             },
//           ],
//           childType: "heading",
//         },
//       ],
//       },
//     },
//   ],
// }
/**
 * pathで指定された要素を削除する
 * 
 * @param path evaluationTree.paintLoads.0.headings.0.headings.0.evaluations.1
 */
const path = "tree.titleObject.0.headings.0.headings.0.endObject.1"
const arrayPath = path.split(".").slice(0, -1).join(".")    
const index = parseInt(path.split(".").pop() as string, 10)
console.log(arrayPath, index)
    // console.log(_.get(form, arrayPath).splice(index, 1))
